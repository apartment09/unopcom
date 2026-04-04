const Database = require('better-sqlite3');
const path = require('path');
const narrative = require('./narrative');

const db = new Database(path.join(__dirname, 'unopcom.sqlite'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// ── Schema ───────────────────────────────────────────────────────────

db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT DEFAULT '',
    priority INTEGER DEFAULT 2,            -- 1=trivial, 2=moderate, 3=critical, 4=terror
    category TEXT DEFAULT 'combat',        -- combat, research, engineering, recon
    duration_minutes INTEGER NOT NULL,     -- user-estimated time
    status TEXT DEFAULT 'active',          -- active, completed, abandoned
    created_at TEXT DEFAULT (datetime('now')),
    completed_at TEXT,
    credits_awarded INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS game_state (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    credits INTEGER DEFAULT 0,             -- spendable balance
    credits_earned INTEGER DEFAULT 0,      -- lifetime total (for ranks)
    invasion_meter REAL DEFAULT 15.0,      -- 0-100
    streak_days INTEGER DEFAULT 0,
    last_completion_date TEXT,
    last_tick TEXT DEFAULT (datetime('now')),
    campaign_start TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS soldiers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    nickname TEXT,
    rank_level INTEGER DEFAULT 0,
    xp INTEGER DEFAULT 0,
    status TEXT DEFAULT 'active',          -- active, wounded, kia
    missions INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    detail TEXT DEFAULT '',
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS territories (
    id TEXT PRIMARY KEY,
    status TEXT DEFAULT 'xcom',            -- xcom, contested, alien, fortified
    contested_at TEXT,                      -- when it became contested (for timeout)
    contested_by TEXT DEFAULT NULL          -- 'alien' or 'player' (who made it contested)
  );

  CREATE TABLE IF NOT EXISTS base_rooms (
    id TEXT PRIMARY KEY,
    built_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS research (
    id TEXT PRIMARY KEY,
    unlocked_at TEXT DEFAULT (datetime('now'))
  );

  INSERT OR IGNORE INTO game_state (id) VALUES (1);
  -- Starter room
  INSERT OR IGNORE INTO base_rooms (id) VALUES ('command');
`);

// Migrations
try { db.exec("ALTER TABLE tasks ADD COLUMN territory_id TEXT DEFAULT NULL"); } catch(e) {}
try { db.exec("ALTER TABLE territories ADD COLUMN contested_by TEXT DEFAULT NULL"); } catch(e) {}

// Seed territories if empty
const terCount = db.prepare('SELECT COUNT(*) as c FROM territories').get().c;
if (terCount === 0) {
  const seed = db.prepare('INSERT INTO territories (id, status) VALUES (?, ?)');
  // Start: player controls 8, aliens control 3, 1 hidden
  const starts = [
    ['north-america', 'xcom'], ['south-america', 'xcom'], ['europe', 'xcom'],
    ['russia', 'contested'], ['africa', 'xcom'], ['middle-east', 'alien'],
    ['central-asia', 'alien'], ['south-asia', 'xcom'], ['east-asia', 'xcom'],
    ['southeast-asia', 'xcom'], ['oceania', 'xcom'], ['antarctica', 'alien']
  ];
  for (const [id, status] of starts) {
    seed.run(id, status);
  }
}

// ── Constants ────────────────────────────────────────────────────────

const RANKS = [
  { name: 'Rookie',    credits: 0 },
  { name: 'Squaddie',  credits: 100 },
  { name: 'Sergeant',  credits: 300 },
  { name: 'Captain',   credits: 700 },
  { name: 'Major',     credits: 1500 },
  { name: 'Colonel',   credits: 3000 },
  { name: 'Commander', credits: 6000 },
];

const SOLDIER_RANKS = [
  'Rookie', 'Squaddie', 'Corporal', 'Sergeant', 'Lieutenant', 'Captain', 'Major'
];

const CREDITS_BY_PRIORITY = { 1: 10, 2: 25, 3: 50, 4: 100 };
const INVASION_REDUCTION  = { 1: 3,  2: 6,  3: 12, 4: 20 };
const PRIORITY_LABELS     = { 1: 'Trivial', 2: 'Moderate', 3: 'Critical', 4: 'Terror' };

// Shop prices
const SHOP = {
  recruit:     100,   // new soldier
  heal:        50,    // heal wounded soldier
  intel:       75,    // reduce threat by 10
};

// Base rooms — id, name, cost, description, grid position, requires (dependency)
const BASE_ROOMS = [
  { id: 'command',  name: 'Command Center',  cost: 0,   desc: 'Central operations hub. Mission control.',              row: 1, col: 1, requires: null },
  { id: 'barracks', name: 'Barracks',         cost: 150, desc: 'Houses your soldiers. +1 soldier on build.',            row: 0, col: 1, requires: 'command' },
  { id: 'lab',      name: 'Research Lab',     cost: 200, desc: 'Enables the research tree. Unlocks tech projects.',     row: 1, col: 0, requires: 'command' },
  { id: 'workshop', name: 'Workshop',         cost: 200, desc: 'Engineering bay. +10% credits from engineering tasks.', row: 2, col: 1, requires: 'command' },
  { id: 'hangar',   name: 'Hangar',           cost: 250, desc: 'Aircraft storage. Reduces threat drift by 25%.',        row: 1, col: 2, requires: 'command' },
  { id: 'medbay',   name: 'Medical Bay',      cost: 175, desc: 'Auto-heals wounded soldiers over time.',                row: 0, col: 0, requires: 'barracks' },
  { id: 'defense',  name: 'Defense Matrix',   cost: 300, desc: 'Base defense. Slows invasion meter by 20%.',            row: 2, col: 0, requires: 'hangar' },
  { id: 'comms',    name: 'Comms Array',      cost: 250, desc: 'Long-range comms. +1 streak grace day.',                row: 0, col: 2, requires: 'lab' },
  { id: 'vault',    name: 'Vault',            cost: 350, desc: 'Secure storage. +15% credits from all missions.',       row: 2, col: 2, requires: 'workshop' },
];

// Research tree — streak milestones
const RESEARCH_TREE = [
  { id: 'laser',     name: 'Laser Weapons',      streak: 3,  desc: 'Basic energy weapons research complete.' },
  { id: 'alloys',    name: 'Alien Alloys',        streak: 5,  desc: 'Alien materials can now be studied.' },
  { id: 'plasma',    name: 'Plasma Weapons',      streak: 7,  desc: 'Advanced plasma technology unlocked.' },
  { id: 'medkit',    name: 'Advanced Medkit',      streak: 10, desc: 'Improved field medicine. Wounded heal faster.' },
  { id: 'armor',     name: 'Titan Armor',         streak: 14, desc: 'Heavy armor plating. Soldiers are tougher.' },
  { id: 'psionics',  name: 'Psionics',            streak: 21, desc: 'Mind powers unlocked. The aliens fear you.' },
  { id: 'hyperwave', name: 'Hyperwave Decoder',   streak: 30, desc: 'Full alien comm intercept. Total intelligence.' },
  { id: 'fusion',    name: 'Fusion Defense',       streak: 45, desc: 'Ultimate defense technology. Earth is safe.' },
];

// Territory definitions
const TERRITORIES = [
  { id: 'north-america',  name: 'North America',  adj: ['south-america', 'europe'] },
  { id: 'south-america',  name: 'South America',  adj: ['north-america', 'africa'] },
  { id: 'europe',         name: 'Europe',          adj: ['north-america', 'africa', 'russia'] },
  { id: 'russia',         name: 'Russia',          adj: ['europe', 'central-asia', 'east-asia'] },
  { id: 'africa',         name: 'Africa',          adj: ['south-america', 'europe', 'middle-east'] },
  { id: 'middle-east',    name: 'Middle East',     adj: ['africa', 'central-asia', 'south-asia'] },
  { id: 'central-asia',   name: 'Central Asia',    adj: ['russia', 'middle-east', 'south-asia', 'east-asia'] },
  { id: 'south-asia',     name: 'South Asia',      adj: ['middle-east', 'central-asia', 'southeast-asia'] },
  { id: 'east-asia',      name: 'East Asia',       adj: ['russia', 'central-asia', 'southeast-asia', 'oceania'] },
  { id: 'southeast-asia', name: 'Southeast Asia',  adj: ['south-asia', 'east-asia', 'oceania'] },
  { id: 'oceania',        name: 'Oceania',         adj: ['east-asia', 'southeast-asia'] },
  { id: 'antarctica',     name: 'Antarctica',      adj: [] }, // isolated, special
];

const FORTIFY_COST = 200;
const MAX_FORTIFIED = 3;
const CONTESTED_TIMEOUT_HOURS = 48; // contested → alien after 48h undefended

// Threat level narrative
const THREAT_LEVELS = [
  { min: 0,  name: 'Minimal',  desc: 'No significant alien activity.' },
  { min: 25, name: 'Elevated', desc: 'Alien activity detected.' },
  { min: 50, name: 'Severe',   desc: 'Panic spreading across the globe.' },
  { min: 75, name: 'Critical', desc: 'Council threatening to withdraw funding.' },
  { min: 90, name: 'Terminal', desc: "Earth's defenses are crumbling." },
];

// Soldier rank passive credit bonuses (% per active soldier of that rank)
const SOLDIER_RANK_BONUS = [0, 0, 1, 2, 3, 4, 5]; // Rookie:0, Squaddie:0, Corporal:1%...Major:5%

const FIRST_NAMES = [
  'Alex', 'Sam', 'Jordan', 'Riley', 'Morgan', 'Casey', 'Taylor', 'Quinn',
  'Reese', 'Avery', 'Dakota', 'Kai', 'Nova', 'Sage', 'Phoenix', 'Blake',
  'Harper', 'Emery', 'River', 'Skyler', 'Rowan', 'Ellis', 'Arden', 'Noel'
];
const LAST_NAMES = [
  'Walker', 'Chen', 'Ortiz', 'Kim', 'Petrov', 'Tanaka', 'Hansen', 'Silva',
  'Cohen', 'Okafor', 'Müller', 'Dubois', 'Ivanov', 'Patel', 'Larsen', 'Santos',
  'Nakamura', 'Torres', 'Weber', 'Johansson', 'Russo', 'Park', 'Ali', 'Fischer'
];
const NICKNAMES = [
  'Ironside', 'Ghost', 'Viper', 'Rocket', 'Ace', 'Shadow', 'Blaze', 'Frost',
  'Raven', 'Tank', 'Hawk', 'Storm', 'Wolf', 'Razor', 'Bullet', 'Zero',
  'Cyclone', 'Reaper', 'Flash', 'Titan', 'Cobra', 'Spark', 'Hammer', 'Wraith'
];

// ── Helpers ──────────────────────────────────────────────────────────

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSoldierName() {
  return `${randomFrom(FIRST_NAMES)} ${randomFrom(LAST_NAMES)}`;
}

function getRankForCredits(earned) {
  let rank = 0;
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (earned >= RANKS[i].credits) { rank = i; break; }
  }
  return rank;
}

function getSoldierRankForXP(xp) {
  const thresholds = [0, 30, 80, 150, 250, 400, 600];
  let rank = 0;
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (xp >= thresholds[i]) { rank = i; break; }
  }
  return rank;
}

/** Calculate overtime status for a task */
function getOvertimeInfo(task) {
  if (task.status !== 'active') return { phase: 'done', ratio: 0 };
  const elapsed = (Date.now() - new Date(task.created_at + 'Z').getTime()) / 60000;
  const dur = task.duration_minutes;
  if (elapsed <= dur) {
    return { phase: 'on_time', ratio: 0, remaining: dur - elapsed, elapsed, duration: dur };
  }
  const overtime = elapsed - dur;
  const ratio = overtime / dur;

  // Psionics extends grace period from 50% to 75%
  const hasPsionics = !!db.prepare("SELECT id FROM research WHERE id = 'psionics'").get();
  const graceLimit = hasPsionics ? 0.75 : 0.5;

  let phase;
  if (ratio <= graceLimit) phase = 'grace';
  else if (ratio <= 1.0)   phase = 'overdue';
  else                     phase = 'critical';
  return { phase, ratio, overtime, elapsed, duration: dur };
}

// ── Soldier creation with auto-template assignment ───────────────────

function createSoldierWithTemplate() {
  const available = narrative.getAvailableTemplates();
  if (available.length > 0) {
    const tpl = available[Math.floor(Math.random() * available.length)];
    const result = db.prepare('INSERT INTO soldiers (name) VALUES (?)').run(tpl.name);
    const id = result.lastInsertRowid;
    narrative.assignTemplate(id, tpl.id);
    narrative.detectRelationships(id);
    return id;
  }
  const result = db.prepare('INSERT INTO soldiers (name) VALUES (?)').run(generateSoldierName());
  return result.lastInsertRowid;
}

// ── Seed initial soldiers ────────────────────────────────────────────

const soldierCount = db.prepare('SELECT COUNT(*) as c FROM soldiers').get().c;
if (soldierCount === 0) {
  createSoldierWithTemplate();
}

// ── Public API ───────────────────────────────────────────────────────

module.exports = {
  RANKS, SOLDIER_RANKS, PRIORITY_LABELS, SHOP, BASE_ROOMS, RESEARCH_TREE, THREAT_LEVELS, SOLDIER_RANK_BONUS, TERRITORIES, FORTIFY_COST, MAX_FORTIFIED,

  // ── Tasks ────────────────────────────────────────────────────────

  getAllTasks(status) {
    let tasks;
    if (status) {
      tasks = db.prepare('SELECT * FROM tasks WHERE status = ? ORDER BY status ASC, created_at DESC').all(status);
    } else {
      tasks = db.prepare('SELECT * FROM tasks ORDER BY status ASC, created_at DESC').all();
    }
    // Sort active tasks by nearest deadline (created_at + duration)
    tasks.sort((a, b) => {
      if (a.status === 'active' && b.status === 'active') {
        const deadlineA = new Date(a.created_at + 'Z').getTime() + a.duration_minutes * 60000;
        const deadlineB = new Date(b.created_at + 'Z').getTime() + b.duration_minutes * 60000;
        return deadlineA - deadlineB;
      }
      if (a.status === 'active') return -1;
      if (b.status === 'active') return 1;
      return 0;
    });
    return tasks.map(t => ({ ...t, overtime: getOvertimeInfo(t) }));
  },

  getTask(id) {
    const t = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
    if (t) t.overtime = getOvertimeInfo(t);
    return t;
  },

  createTask({ title, description, priority, category, duration_minutes, territory_id }) {
    const result = db.prepare(
      'INSERT INTO tasks (title, description, priority, category, duration_minutes, territory_id) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(title, description || '', priority || 2, category || 'combat', duration_minutes, territory_id || null);
    return this.getTask(result.lastInsertRowid);
  },

  updateTask(id, fields) {
    const allowed = ['title', 'description', 'priority', 'category', 'duration_minutes', 'territory_id'];
    const sets = [];
    const vals = [];
    for (const key of allowed) {
      if (fields[key] !== undefined) {
        sets.push(`${key} = ?`);
        vals.push(fields[key]);
      }
    }
    if (!sets.length) return this.getTask(id);
    vals.push(id);
    db.prepare(`UPDATE tasks SET ${sets.join(', ')} WHERE id = ?`).run(...vals);
    return this.getTask(id);
  },

  deleteTask(id) {
    db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
  },

  // ── Complete a task ──────────────────────────────────────────────

  completeTask(id) {
    const task = this.getTask(id);
    if (!task || task.status !== 'active') return null;

    const state = this.getGameState();
    const priority = task.priority || 2;
    const base = CREDITS_BY_PRIORITY[priority] || 25;
    const ot = task.overtime;

    // Credits scale with overtime phase
    let creditMultiplier, soldierEffect;
    if (ot.phase === 'on_time') {
      creditMultiplier = 1.5;
      soldierEffect = 'none';
    } else if (ot.phase === 'grace') {
      creditMultiplier = 1.0;
      soldierEffect = 'none';
    } else if (ot.phase === 'overdue') {
      creditMultiplier = 0.5;
      soldierEffect = 'wound';
    } else {  // critical
      creditMultiplier = 0.25;
      // Titan Armor: critical downgrades KIA to wound
      soldierEffect = this.hasResearch('armor') ? 'wound' : 'kia';
    }

    // Build credit breakdown for display
    const breakdown = [];
    let earned = base;
    breakdown.push({ label: `${PRIORITY_LABELS[priority]} base`, value: `${earned}` });

    // Overtime multiplier
    earned = Math.round(earned * creditMultiplier);
    if (creditMultiplier !== 1) {
      const otLabel = ot.phase === 'on_time' ? 'On-time bonus' : `Overtime (${ot.phase})`;
      breakdown.push({ label: otLabel, value: `x${creditMultiplier}`, running: earned });
    }

    // Streak bonus: +10% per day (max +50%)
    const streakBonus = 1 + Math.min(state.streak_days * 0.1, 0.5);
    if (streakBonus > 1) {
      earned = Math.round(earned * streakBonus);
      breakdown.push({ label: `Streak x${streakBonus.toFixed(1)}`, running: earned });
    }

    // Workshop: +10% on engineering
    if (this.hasRoom('workshop') && task.category === 'engineering') {
      const before = earned;
      earned = Math.round(earned * 1.1);
      breakdown.push({ label: 'Workshop +10%', value: `+${earned - before}`, running: earned });
    }

    // Research: Laser +5%, Plasma +10%
    if (this.hasResearch('laser')) {
      const before = earned;
      earned = Math.round(earned * 1.05);
      breakdown.push({ label: 'Laser Tech +5%', value: `+${earned - before}`, running: earned });
    }
    if (this.hasResearch('plasma')) {
      const before = earned;
      earned = Math.round(earned * 1.10);
      breakdown.push({ label: 'Plasma Tech +10%', value: `+${earned - before}`, running: earned });
    }

    // Soldier rank passive bonus
    const activeSoldiers = db.prepare("SELECT rank_level FROM soldiers WHERE status = 'active'").all();
    const soldierBonus = activeSoldiers.reduce((sum, s) => sum + (SOLDIER_RANK_BONUS[s.rank_level] || 0), 0);
    if (soldierBonus > 0) {
      const before = earned;
      earned = Math.round(earned * (1 + soldierBonus / 100));
      breakdown.push({ label: `Soldiers +${soldierBonus}%`, value: `+${earned - before}`, running: earned });
    }

    // Territory income: +2% per XCOM/fortified territory
    const xcomTerritories = db.prepare("SELECT COUNT(*) as c FROM territories WHERE status IN ('xcom','fortified')").get().c;
    const terBonus = xcomTerritories * 2;
    if (terBonus > 0) {
      const before = earned;
      earned = Math.round(earned * (1 + terBonus / 100));
      breakdown.push({ label: `Territories +${terBonus}%`, value: `+${earned - before}`, running: earned });
    }

    // Update task
    db.prepare(
      "UPDATE tasks SET status = 'completed', completed_at = datetime('now'), credits_awarded = ? WHERE id = ?"
    ).run(earned, id);

    // Update game state — credits
    const newCredits = state.credits + earned;
    const newEarned = state.credits_earned + earned;
    let reduction = INVASION_REDUCTION[priority] || 6;
    // Alloys: +20% threat reduction from missions
    if (this.hasResearch('alloys')) reduction = Math.round(reduction * 1.2);
    const newInvasion = Math.max(0, state.invasion_meter - reduction);

    // Streak — Comms Array gives 1 grace day (check 2 days back)
    const today = new Date().toISOString().slice(0, 10);
    let newStreak = state.streak_days;
    if (state.last_completion_date === today) {
      // same day
    } else if (state.last_completion_date) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const dayBefore = new Date();
      dayBefore.setDate(dayBefore.getDate() - 2);
      const hasComms = this.hasRoom('comms');

      if (state.last_completion_date === yesterday.toISOString().slice(0, 10)) {
        newStreak++;
      } else if (hasComms && state.last_completion_date === dayBefore.toISOString().slice(0, 10)) {
        newStreak++; // grace day — streak preserved
      } else {
        newStreak = 1;
      }
    } else {
      newStreak = 1;
    }

    // Rank check
    const oldRank = getRankForCredits(state.credits_earned);
    const newRank = getRankForCredits(newEarned);

    db.prepare(`
      UPDATE game_state SET credits = ?, credits_earned = ?, invasion_meter = ?,
        streak_days = ?, last_completion_date = ? WHERE id = 1
    `).run(newCredits, newEarned, newInvasion, newStreak, today);

    // Event
    let detail = `+${earned} CR | Threat -${reduction}`;
    if (ot.phase === 'on_time') detail += ' | On time bonus!';
    if (streakBonus > 1) detail += ` | Streak x${streakBonus.toFixed(1)}`;
    db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
      .run('mission_complete', `Mission Complete: ${task.title}`, detail);

    if (newRank > oldRank) {
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('rank_up', `Promoted to ${RANKS[newRank].name}!`, `Lifetime earnings: ${newEarned} CR`);
    }

    // Soldier consequences
    let soldierResult = null;
    if (soldierEffect === 'wound') {
      soldierResult = this._woundSoldier(task.title);
    } else if (soldierEffect === 'kia') {
      soldierResult = this._killSoldier(task.title);
    }

    // Record which soldier was affected so reactivation can reverse it
    if (soldierResult) {
      db.prepare('UPDATE tasks SET soldier_id = ?, soldier_prior_status = ? WHERE id = ?')
        .run(soldierResult.id, 'active', id);
    }

    // Promote a random soldier (only if on_time or grace)
    let soldierPromoted = null;
    if (soldierEffect === 'none') {
      soldierPromoted = this._promoteSoldier(priority);
    }

    // Check research unlocks
    const newResearch = this.checkResearchUnlocks();

    // Vault bonus: +15% credits
    if (this.hasRoom('vault') && earned > 0) {
      const before = earned;
      const bonus = Math.round(earned * 0.15);
      earned += bonus;
      breakdown.push({ label: 'Vault +15%', value: `+${bonus}`, running: earned });
      db.prepare('UPDATE game_state SET credits = credits + ?, credits_earned = credits_earned + ? WHERE id = 1')
        .run(bonus, bonus);
    }

    // Near-miss: Titan Armor saved a soldier from KIA
    let nearMiss = null;
    if (ot.phase === 'critical' && this.hasResearch('armor') && soldierResult) {
      nearMiss = soldierResult; // would have been KIA, was downgraded to wound
    }

    // Get full soldier record for debrief (if affected)
    const affectedSoldier = soldierResult || null;
    let soldierRecord = null;
    if (affectedSoldier) {
      const s = db.prepare('SELECT * FROM soldiers WHERE id = ?').get(affectedSoldier.id);
      if (s) {
        const created = new Date(s.created_at + 'Z');
        const daysServed = Math.floor((Date.now() - created.getTime()) / 86400000);
        soldierRecord = { ...s, days_served: daysServed, rank_name: SOLDIER_RANKS[s.rank_level] || 'Rookie' };
      }
    }

    // Territory defense (if mission assigned to a territory)
    const territoryResult = this.defendTerritory(task.territory_id);

    // Narrative: evaluate chapter unlocks for all active soldiers
    const storyUnlocks = narrative.evaluateAllUnlocks({
      event_type: 'mission_complete',
      involves_template: soldierPromoted?.template_id || null,
    });

    // Narrative: generate reactions
    narrative.generateReactions('mission_complete', { name: task.title });

    return {
      task: this.getTask(id),
      credits_earned: earned,
      breakdown,
      on_time: ot.phase === 'on_time',
      overtime_phase: ot.phase,
      streak: newStreak,
      invasion_reduction: reduction,
      rank_up: newRank > oldRank ? RANKS[newRank].name : null,
      soldier_promoted: soldierPromoted,
      soldier_wounded: soldierEffect === 'wound' ? soldierRecord : null,
      soldier_kia: soldierEffect === 'kia' ? soldierRecord : null,
      near_miss: nearMiss,
      research_unlocked: newResearch,
      territory: territoryResult,
      story_unlocks: storyUnlocks,
    };
  },

  // ── Abandon task ─────────────────────────────────────────────────

  abandonTask(id) {
    const task = this.getTask(id);
    if (!task || task.status !== 'active') return null;

    db.prepare("UPDATE tasks SET status = 'abandoned' WHERE id = ?").run(id);

    const state = this.getGameState();
    const newInvasion = Math.min(100, state.invasion_meter + 8);
    db.prepare('UPDATE game_state SET invasion_meter = ? WHERE id = 1').run(newInvasion);

    const victim = this._killSoldier(task.title);

    db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
      .run('mission_fail', `Mission Abandoned: ${task.title}`, 'Threat +8');

    return { task: this.getTask(id), invasion_increase: 8, soldier_lost: victim };
  },

  // ── Reactivate completed task (undo results) ─────────────────────

  reactivateTask(id) {
    const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
    if (!task || (task.status !== 'completed' && task.status !== 'abandoned')) return null;

    const state = db.prepare('SELECT * FROM game_state WHERE id = 1').get();
    let detail;

    if (task.status === 'completed') {
      // Reverse: remove credits, add threat back
      const awarded = task.credits_awarded || 0;
      const priority = task.priority || 2;
      const reduction = INVASION_REDUCTION[priority] || 6;
      const newCredits = Math.max(0, state.credits - awarded);
      const newEarned = Math.max(0, state.credits_earned - awarded);
      const newInvasion = Math.min(100, state.invasion_meter + reduction);
      db.prepare('UPDATE game_state SET credits = ?, credits_earned = ?, invasion_meter = ? WHERE id = 1')
        .run(newCredits, newEarned, newInvasion);
      detail = `-${awarded} CR | Threat +${reduction}`;
    } else {
      // Reverse abandon: reduce threat by 8
      const newInvasion = Math.max(0, state.invasion_meter - 8);
      db.prepare('UPDATE game_state SET invasion_meter = ? WHERE id = 1').run(newInvasion);
      detail = 'Threat -8';
    }

    // Restore soldier if one was wounded/killed during this completion
    let soldierRestored = null;
    if (task.soldier_id && task.soldier_prior_status) {
      const soldier = db.prepare('SELECT * FROM soldiers WHERE id = ?').get(task.soldier_id);
      if (soldier && (soldier.status === 'wounded' || soldier.status === 'kia')) {
        db.prepare('UPDATE soldiers SET status = ? WHERE id = ?')
          .run(task.soldier_prior_status, task.soldier_id);
        soldierRestored = { ...soldier, status: task.soldier_prior_status };
        db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
          .run('soldier_recovered', `${soldier.nickname || soldier.name} returned to duty`,
            `Mission reactivated: ${task.title}`);
      }
    }

    // Reset task to active with fresh timer
    db.prepare(
      "UPDATE tasks SET status = 'active', completed_at = NULL, credits_awarded = 0, soldier_id = NULL, soldier_prior_status = NULL, created_at = datetime('now') WHERE id = ?"
    ).run(id);

    db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
      .run('mission_reactivate', `Mission Reactivated: ${task.title}`, detail);

    return { task: this.getTask(id), credits_reversed: awarded, invasion_increase: reduction, soldier_restored: soldierRestored };
  },

  // ── Soldier effects (internal) ───────────────────────────────────

  _noSoldierPenalty(missionTitle, severity) {
    // No soldiers available — invasion spikes instead
    const spike = severity === 'kia' ? 20 : 10;
    const state = db.prepare('SELECT invasion_meter FROM game_state WHERE id = 1').get();
    const newMeter = Math.min(100, state.invasion_meter + spike);
    db.prepare('UPDATE game_state SET invasion_meter = ? WHERE id = 1').run(newMeter);
    db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
      .run('invasion_surge', 'No soldiers available — Alien Surge!',
        `Threat +${spike} | ${missionTitle} went undefended`);
    return null;
  },

  _woundSoldier(missionTitle) {
    const s = db.prepare("SELECT * FROM soldiers WHERE status = 'active' ORDER BY RANDOM() LIMIT 1").get();
    if (!s) return this._noSoldierPenalty(missionTitle, 'wound');
    db.prepare("UPDATE soldiers SET status = 'wounded' WHERE id = ?").run(s.id);
    db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
      .run('soldier_wounded', `${s.nickname || s.name} wounded`,
        `Injured during overdue mission: ${missionTitle}`);
    return s;
  },

  _killSoldier(missionTitle) {
    const s = db.prepare("SELECT * FROM soldiers WHERE status = 'active' ORDER BY RANDOM() LIMIT 1").get();
    if (!s) return this._noSoldierPenalty(missionTitle, 'kia');
    db.prepare("UPDATE soldiers SET status = 'kia' WHERE id = ?").run(s.id);
    db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
      .run('soldier_kia', `${s.nickname || s.name} is KIA`,
        `Lost during mission: ${missionTitle}`);
    // Narrative: handle death — mark lost chapters, generate grief reactions
    narrative.handleDeath(s.id, `Killed during mission: ${missionTitle}`);
    return s;
  },

  _promoteSoldier(taskPriority) {
    const s = db.prepare("SELECT * FROM soldiers WHERE status = 'active' ORDER BY RANDOM() LIMIT 1").get();
    if (!s) return null;

    const soldierXP = (taskPriority || 2) * 10;
    const newXP = s.xp + soldierXP;
    const oldRank = getSoldierRankForXP(s.xp);
    const newRank = getSoldierRankForXP(newXP);
    const missions = s.missions + 1;

    let nickname = s.nickname;
    if (!nickname && newRank >= 2) nickname = randomFrom(NICKNAMES);

    db.prepare('UPDATE soldiers SET xp = ?, rank_level = ?, missions = ?, nickname = ? WHERE id = ?')
      .run(newXP, newRank, missions, nickname, s.id);

    const promoted = newRank > oldRank;
    if (promoted) {
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('soldier_promoted', `${nickname || s.name} promoted to ${SOLDIER_RANKS[newRank]}`,
          `${missions} missions completed`);
    }

    return { ...s, xp: newXP, rank_level: newRank, missions, nickname, promoted, rank_name: SOLDIER_RANKS[newRank] };
  },

  // ── Soldiers ─────────────────────────────────────────────────────

  getSoldiers() {
    return db.prepare('SELECT * FROM soldiers ORDER BY status ASC, xp DESC').all();
  },

  // ── Shop ─────────────────────────────────────────────────────────

  shopBuy(item) {
    const price = SHOP[item];
    if (!price) return { error: 'Unknown item' };

    const state = db.prepare('SELECT * FROM game_state WHERE id = 1').get();
    if (state.credits < price) return { error: 'Not enough credits' };

    let result;
    if (item === 'recruit') {
      const id = createSoldierWithTemplate();
      const s = db.prepare('SELECT * FROM soldiers WHERE id = ?').get(id);
      const name = s.nickname ? `${s.name} "${s.nickname}"` : s.name;
      result = { message: `${name} recruited`, name: s.name };
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('shop', `Recruited ${name}`, `-${price} CR`);
      // Generate arrival reactions from existing squad
      narrative.generateReactions('recruit', { name });
    } else if (item === 'heal') {
      const wounded = db.prepare("SELECT * FROM soldiers WHERE status = 'wounded' ORDER BY RANDOM() LIMIT 1").get();
      if (!wounded) return { error: 'No wounded soldiers' };
      db.prepare("UPDATE soldiers SET status = 'active' WHERE id = ?").run(wounded.id);
      result = { message: `${wounded.nickname || wounded.name} healed`, soldier: wounded };
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('shop', `Healed ${wounded.nickname || wounded.name}`, `-${price} CR`);
    } else if (item === 'intel') {
      const newInvasion = Math.max(0, state.invasion_meter - 10);
      db.prepare('UPDATE game_state SET invasion_meter = ? WHERE id = 1').run(newInvasion);
      result = { message: 'Council bribed. Threat -10', reduction: 10 };
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('shop', 'Council Bribed: Threat -10', `-${price} CR`);
    }

    db.prepare('UPDATE game_state SET credits = credits - ? WHERE id = 1').run(price);
    return { ...result, cost: price };
  },

  // ── Game state ───────────────────────────────────────────────────

  getGameState() {
    const state = db.prepare('SELECT * FROM game_state WHERE id = 1').get();
    const rankLevel = getRankForCredits(state.credits_earned);
    state.rank_level = rankLevel;
    state.rank_name = RANKS[rankLevel]?.name || 'Rookie';
    state.next_rank = RANKS[rankLevel + 1] || null;
    state.rank_progress = state.next_rank
      ? (state.credits_earned - RANKS[rankLevel].credits) / (state.next_rank.credits - RANKS[rankLevel].credits)
      : 1;

    state.active_tasks = db.prepare("SELECT COUNT(*) as c FROM tasks WHERE status = 'active'").get().c;
    state.overtime_tasks = this._countOvertimeTasks();
    state.total_completed = db.prepare("SELECT COUNT(*) as c FROM tasks WHERE status = 'completed'").get().c;
    state.total_abandoned = db.prepare("SELECT COUNT(*) as c FROM tasks WHERE status = 'abandoned'").get().c;
    state.active_soldiers = db.prepare("SELECT COUNT(*) as c FROM soldiers WHERE status = 'active'").get().c;
    state.wounded_soldiers = db.prepare("SELECT COUNT(*) as c FROM soldiers WHERE status = 'wounded'").get().c;
    state.kia_soldiers = db.prepare("SELECT COUNT(*) as c FROM soldiers WHERE status = 'kia'").get().c;

    // Campaign days
    const campaignStart = new Date(state.campaign_start + 'Z');
    state.campaign_days = Math.floor((Date.now() - campaignStart.getTime()) / 86400000) + 1;

    // Threat narrative
    let threatLevel = THREAT_LEVELS[0];
    for (const t of THREAT_LEVELS) {
      if (state.invasion_meter >= t.min) threatLevel = t;
    }
    state.threat_name = threatLevel.name;
    state.threat_desc = threatLevel.desc;

    // Active bonuses from base + research
    const bonuses = [];
    const built = db.prepare('SELECT id FROM base_rooms').all().map(r => r.id);
    const unlocked = db.prepare('SELECT id FROM research').all().map(r => r.id);
    if (built.includes('workshop'))  bonuses.push({ label: 'Workshop', effect: '+10% engineering credits' });
    if (built.includes('hangar'))    bonuses.push({ label: 'Hangar', effect: '-25% threat drift' });
    if (built.includes('medbay'))    bonuses.push({ label: 'Medical Bay', effect: 'Auto-heal wounded' });
    if (built.includes('defense'))   bonuses.push({ label: 'Defense Matrix', effect: '-20% invasion rate' });
    if (built.includes('comms'))     bonuses.push({ label: 'Comms Array', effect: '+1 streak grace day' });
    if (built.includes('vault'))     bonuses.push({ label: 'Vault', effect: '+15% all credits' });
    if (unlocked.includes('laser'))  bonuses.push({ label: 'Laser Tech', effect: '+5% credits' });
    if (unlocked.includes('alloys')) bonuses.push({ label: 'Alien Alloys', effect: '+20% threat reduction' });
    if (unlocked.includes('plasma')) bonuses.push({ label: 'Plasma Tech', effect: '+10% credits' });
    if (unlocked.includes('medkit')) bonuses.push({ label: 'Adv. Medkit', effect: 'Faster healing' });
    if (unlocked.includes('armor'))  bonuses.push({ label: 'Titan Armor', effect: 'Critical→wound (no KIA)' });
    if (unlocked.includes('psionics')) bonuses.push({ label: 'Psionics', effect: 'Grace to 75% overtime' });
    if (unlocked.includes('hyperwave')) bonuses.push({ label: 'Hyperwave', effect: '-50% threat drift' });
    if (unlocked.includes('fusion')) bonuses.push({ label: 'Fusion Defense', effect: 'Invasion capped at 85%' });
    // Soldier rank bonuses
    const soldiers = db.prepare("SELECT rank_level FROM soldiers WHERE status = 'active'").all();
    const soldierPct = soldiers.reduce((sum, s) => sum + (SOLDIER_RANK_BONUS[s.rank_level] || 0), 0);
    if (soldierPct > 0) bonuses.push({ label: 'Soldier Ranks', effect: `+${soldierPct}% credits` });
    // Territory income bonus
    const xcomTer = db.prepare("SELECT COUNT(*) as c FROM territories WHERE status IN ('xcom','fortified')").get().c;
    const territoryBonus = xcomTer * 2;
    if (territoryBonus > 0) bonuses.push({ label: `Territories (${xcomTer})`, effect: `+${territoryBonus}% credits` });
    state.active_bonuses = bonuses;

    // Territory stats for display
    state.territory_stats = this.getTerritoryStats();

    return state;
  },

  _countOvertimeTasks() {
    const tasks = db.prepare("SELECT * FROM tasks WHERE status = 'active'").all();
    return tasks.filter(t => getOvertimeInfo(t).phase !== 'on_time').length;
  },

  // ── Invasion tick ────────────────────────────────────────────────

  tickInvasion() {
    const state = db.prepare('SELECT * FROM game_state WHERE id = 1').get();
    const now = new Date();
    const lastTick = new Date(state.last_tick + 'Z');
    const hoursPassed = (now - lastTick) / (1000 * 60 * 60);

    if (hoursPassed < 0.1) return;

    // Natural drift: +0.5 per day
    let driftMod = 1;
    if (this.hasRoom('hangar'))      driftMod *= 0.75;  // Hangar: -25%
    if (this.hasResearch('hyperwave')) driftMod *= 0.5;  // Hyperwave Decoder: halve drift
    // Antarctica liberated: halve drift again
    const antarcticaStatus = db.prepare("SELECT status FROM territories WHERE id = 'antarctica'").get();
    if (antarcticaStatus && (antarcticaStatus.status === 'xcom' || antarcticaStatus.status === 'fortified')) driftMod *= 0.5;
    let increase = (hoursPassed / 24) * 0.5 * driftMod;

    // Overtime tasks contribute based on their phase
    const activeTasks = db.prepare("SELECT * FROM tasks WHERE status = 'active'").all();
    for (const t of activeTasks) {
      const ot = getOvertimeInfo(t);
      if (ot.phase === 'grace')    increase += 0.3 * hoursPassed;
      if (ot.phase === 'overdue')  increase += 0.8 * hoursPassed;
      if (ot.phase === 'critical') increase += 1.5 * hoursPassed;
    }

    // Defense Matrix slows total increase by 20%
    if (this.hasRoom('defense')) increase *= 0.8;

    // Alien territories add threat: +0.2 per alien territory per hour
    const alienTerCount = db.prepare("SELECT COUNT(*) as c FROM territories WHERE status = 'alien'").get().c;
    increase += alienTerCount * 0.2 * hoursPassed;

    // Fusion Defense: cap invasion at 85% (can never game-over from meter)
    const cap = this.hasResearch('fusion') ? 85 : 100;
    const newInvasion = Math.min(cap, state.invasion_meter + increase);

    db.prepare("UPDATE game_state SET invasion_meter = ?, last_tick = datetime('now') WHERE id = 1")
      .run(newInvasion);

    // Medbay: auto-heal 1 wounded soldier
    if (this.hasRoom('medbay')) {
      const healInterval = this.hasResearch('medkit') ? 2 : 6;
      if (hoursPassed >= healInterval) {
        const wounded = db.prepare(
          "SELECT * FROM soldiers WHERE status = 'wounded' ORDER BY RANDOM() LIMIT 1"
        ).get();
        if (wounded) {
          db.prepare("UPDATE soldiers SET status = 'active' WHERE id = ?").run(wounded.id);
          db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
            .run('base', `${wounded.nickname || wounded.name} healed`, 'Medical Bay auto-recovery');
        }
      }
    }

    // Territory tick: alien expansion, contested timeout, terror missions
    this.tickTerritories(hoursPassed);
  },

  // ── Base ──────────────────────────────────────────────────────────

  getBase() {
    const built = db.prepare('SELECT id FROM base_rooms').all().map(r => r.id);
    return BASE_ROOMS.map(room => ({
      ...room,
      built: built.includes(room.id),
      locked: room.requires && !built.includes(room.requires),
      requires_name: room.requires ? (BASE_ROOMS.find(r => r.id === room.requires)?.name || '') : null,
    }));
  },

  buildRoom(roomId) {
    const room = BASE_ROOMS.find(r => r.id === roomId);
    if (!room) return { error: 'Unknown room' };
    if (room.cost === 0) return { error: 'Already built' };

    const existing = db.prepare('SELECT id FROM base_rooms WHERE id = ?').get(roomId);
    if (existing) return { error: 'Already built' };

    // Check dependency
    if (room.requires) {
      const dep = db.prepare('SELECT id FROM base_rooms WHERE id = ?').get(room.requires);
      if (!dep) {
        const depName = BASE_ROOMS.find(r => r.id === room.requires)?.name || room.requires;
        return { error: `Requires ${depName}` };
      }
    }

    const state = db.prepare('SELECT * FROM game_state WHERE id = 1').get();
    if (state.credits < room.cost) return { error: 'Not enough credits' };

    db.prepare('UPDATE game_state SET credits = credits - ? WHERE id = 1').run(room.cost);
    db.prepare('INSERT INTO base_rooms (id) VALUES (?)').run(roomId);

    // Barracks bonus: +1 soldier on build
    if (roomId === 'barracks') {
      createSoldierWithTemplate();
    }

    db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
      .run('base', `Built ${room.name}`, `-${room.cost} CR`);

    return { message: `${room.name} constructed`, room: roomId, cost: room.cost };
  },

  hasRoom(roomId) {
    return !!db.prepare('SELECT id FROM base_rooms WHERE id = ?').get(roomId);
  },

  hasResearch(techId) {
    return !!db.prepare('SELECT id FROM research WHERE id = ?').get(techId);
  },

  // ── Research ─────────────────────────────────────────────────────

  getResearch() {
    const unlocked = db.prepare('SELECT id FROM research').all().map(r => r.id);
    const state = db.prepare('SELECT * FROM game_state WHERE id = 1').get();
    return RESEARCH_TREE.map(tech => ({
      ...tech,
      unlocked: unlocked.includes(tech.id),
      available: state.streak_days >= tech.streak && !unlocked.includes(tech.id)
    }));
  },

  checkResearchUnlocks() {
    if (!this.hasRoom('lab')) return [];  // need lab to unlock research

    const state = db.prepare('SELECT * FROM game_state WHERE id = 1').get();
    const unlocked = db.prepare('SELECT id FROM research').all().map(r => r.id);
    const newUnlocks = [];

    for (const tech of RESEARCH_TREE) {
      if (state.streak_days >= tech.streak && !unlocked.includes(tech.id)) {
        db.prepare('INSERT OR IGNORE INTO research (id) VALUES (?)').run(tech.id);
        db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
          .run('research', `Research Complete: ${tech.name}`, tech.desc);
        newUnlocks.push(tech);
      }
    }
    return newUnlocks;
  },

  // ── Territories ──────────────────────────────────────────────────

  getTerritories() {
    const rows = db.prepare('SELECT * FROM territories').all();
    const hasHyperwave = this.hasResearch('hyperwave');
    // Count active missions per territory
    const missionCounts = {};
    const mc = db.prepare("SELECT territory_id, COUNT(*) as c FROM tasks WHERE status = 'active' AND territory_id IS NOT NULL GROUP BY territory_id").all();
    for (const r of mc) missionCounts[r.territory_id] = r.c;

    return TERRITORIES.map(def => {
      const row = rows.find(r => r.id === def.id) || { status: 'alien' };
      const hidden = def.id === 'antarctica' && !hasHyperwave;

      // Contested countdown
      let contested_remaining = null;
      if (row.status === 'contested' && row.contested_at) {
        const since = new Date(row.contested_at + 'Z').getTime();
        const deadline = since + CONTESTED_TIMEOUT_HOURS * 3600000;
        contested_remaining = Math.max(0, Math.round((deadline - Date.now()) / 1000));
      }

      return {
        ...def,
        status: row.status,
        contested_at: row.contested_at,
        contested_by: row.contested_by,
        contested_remaining,
        hidden,
        active_missions: missionCounts[def.id] || 0,
      };
    });
  },

  getTerritoryStats() {
    const all = db.prepare('SELECT status, COUNT(*) as c FROM territories GROUP BY status').all();
    const stats = { xcom: 0, contested: 0, alien: 0, fortified: 0 };
    for (const r of all) stats[r.status] = r.c;
    return stats;
  },

  fortifyTerritory(territoryId) {
    const ter = db.prepare('SELECT * FROM territories WHERE id = ?').get(territoryId);
    if (!ter) return { error: 'Unknown territory' };
    if (ter.status !== 'xcom') return { error: 'Can only fortify UN territories' };

    const fortCount = db.prepare("SELECT COUNT(*) as c FROM territories WHERE status = 'fortified'").get().c;
    if (fortCount >= MAX_FORTIFIED) return { error: `Max ${MAX_FORTIFIED} fortified territories` };

    const state = db.prepare('SELECT * FROM game_state WHERE id = 1').get();
    if (state.credits < FORTIFY_COST) return { error: 'Not enough credits' };

    db.prepare('UPDATE game_state SET credits = credits - ? WHERE id = 1').run(FORTIFY_COST);
    db.prepare("UPDATE territories SET status = 'fortified' WHERE id = ?").run(territoryId);

    const name = TERRITORIES.find(t => t.id === territoryId)?.name || territoryId;
    db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
      .run('territory', `${name} fortified`, `-${FORTIFY_COST} CR`);

    return { message: `${name} fortified`, cost: FORTIFY_COST };
  },

  // Called when completing a mission assigned to a territory
  defendTerritory(territoryId) {
    if (!territoryId) return null;
    const ter = db.prepare('SELECT * FROM territories WHERE id = ?').get(territoryId);
    if (!ter) return null;

    const name = TERRITORIES.find(t => t.id === territoryId)?.name || territoryId;

    if (ter.status === 'contested' && ter.contested_by === 'alien') {
      // Defend against alien attack: contested → xcom
      db.prepare("UPDATE territories SET status = 'xcom', contested_at = NULL, contested_by = NULL WHERE id = ?").run(territoryId);
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('territory', `${name} defended`, 'Territory secured');
      return { action: 'defended', territory: name };
    }
    if (ter.status === 'contested' && ter.contested_by === 'player' && territoryId === 'antarctica') {
      // Antarctica liberated — special endgame reward
      db.prepare("UPDATE territories SET status = 'xcom', contested_at = NULL, contested_by = NULL WHERE id = ?").run(territoryId);
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('territory', 'ANTARCTICA LIBERATED \u2014 ALIEN BASE DESTROYED',
          'Invasion drift permanently halved. The tide has turned.');
      return { action: 'antarctica_liberated', territory: name };
    }
    if (ter.status === 'contested' && ter.contested_by === 'player') {
      // Second hit on liberation: contested → xcom
      db.prepare("UPDATE territories SET status = 'xcom', contested_at = NULL, contested_by = NULL WHERE id = ?").run(territoryId);
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('territory', `${name} LIBERATED!`, 'Territory under UN control');
      return { action: 'liberated', territory: name };
    }
    if (ter.status === 'alien') {
      // First hit: alien → contested by player (needs 1 more to liberate)
      db.prepare("UPDATE territories SET status = 'contested', contested_at = NULL, contested_by = 'player' WHERE id = ?").run(territoryId);
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('territory', `${name} assault begun`, 'One more mission to liberate');
      return { action: 'assaulting', territory: name };
    }
    // xcom or fortified — no change needed
    return { action: 'secure', territory: name };
  },

  // Alien expansion — called from tickInvasion
  tickTerritories(hoursPassed) {
    // Speed: base 1 attack per 24h, scales with invasion meter
    const state = db.prepare('SELECT * FROM game_state WHERE id = 1').get();
    const attackRate = (state.invasion_meter / 50); // 0-2 attacks per 24h
    const attackChance = (hoursPassed / 24) * attackRate;

    // Contested timeout: contested territories flip to alien after CONTESTED_TIMEOUT_HOURS
    const contested = db.prepare("SELECT * FROM territories WHERE status = 'contested' AND contested_at IS NOT NULL").all();
    for (const ter of contested) {
      const since = new Date(ter.contested_at + 'Z');
      const hoursContested = (Date.now() - since.getTime()) / (1000 * 60 * 60);
      if (hoursContested >= CONTESTED_TIMEOUT_HOURS) {
        db.prepare("UPDATE territories SET status = 'alien', contested_at = NULL WHERE id = ?").run(ter.id);
        const name = TERRITORIES.find(t => t.id === ter.id)?.name || ter.id;
        db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
          .run('territory', `${name} LOST to aliens`, 'Territory fell — undefended for too long');
      }
    }

    // Random alien expansion
    if (Math.random() < attackChance) {
      const alienTerritories = db.prepare("SELECT id FROM territories WHERE status = 'alien'").all().map(r => r.id);
      if (!alienTerritories.length) return;

      // Find all XCOM/fortified territories adjacent to alien ones
      const targets = [];
      for (const alienId of alienTerritories) {
        const def = TERRITORIES.find(t => t.id === alienId);
        if (!def) continue;
        for (const adjId of def.adj) {
          const adjTer = db.prepare('SELECT * FROM territories WHERE id = ?').get(adjId);
          if (adjTer && (adjTer.status === 'xcom' || adjTer.status === 'fortified')) {
            targets.push(adjTer);
          }
        }
      }
      if (!targets.length) return;

      // Pick random target
      const target = targets[Math.floor(Math.random() * targets.length)];
      const name = TERRITORIES.find(t => t.id === target.id)?.name || target.id;

      if (target.status === 'fortified') {
        // Fortified → downgrade to xcom (absorbs one hit)
        db.prepare("UPDATE territories SET status = 'xcom' WHERE id = ?").run(target.id);
        db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
          .run('territory', `${name} fortifications breached`, 'Defenses absorbed alien attack');
      } else {
        // xcom → contested by aliens
        db.prepare("UPDATE territories SET status = 'contested', contested_at = datetime('now'), contested_by = 'alien' WHERE id = ?").run(target.id);
        db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
          .run('territory', `${name} under attack!`, 'Aliens contesting territory — deploy missions to defend');

        // Auto-generate terror mission
        this._createTerrorMission(target.id, name);
      }
    }

    // Check territory game-over: 10+ alien territories
    const alienCount = db.prepare("SELECT COUNT(*) as c FROM territories WHERE status = 'alien'").get().c;
    if (alienCount >= 10) {
      db.prepare('UPDATE game_state SET invasion_meter = 100 WHERE id = 1').run();
    }
  },

  _createTerrorMission(territoryId, territoryName) {
    // Only create if no active terror mission exists for this territory
    const existing = db.prepare(
      "SELECT id FROM tasks WHERE territory_id = ? AND status = 'active' AND priority = 4"
    ).get(territoryId);
    if (existing) return;

    const titles = [
      `Defend ${territoryName}`,
      `Terror in ${territoryName}`,
      `${territoryName} under siege`,
    ];
    const title = titles[Math.floor(Math.random() * titles.length)];

    db.prepare(
      "INSERT INTO tasks (title, description, priority, category, duration_minutes, territory_id) VALUES (?, ?, 4, 'combat', ?, ?)"
    ).run(title, `Alien forces attacking ${territoryName}. Deploy immediately.`, 480, territoryId);

    db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
      .run('territory', `TERROR MISSION: ${territoryName}`, 'High priority — 8 hours to respond');
  },

  // ── Events ───────────────────────────────────────────────────────

  getEvents(limit = 20) {
    return db.prepare('SELECT * FROM events ORDER BY created_at DESC LIMIT ?').all(limit);
  },

  deleteEvent(id) {
    db.prepare('DELETE FROM events WHERE id = ?').run(id);
  },

  // ── Reset ────────────────────────────────────────────────────────

  resetCampaign() {
    db.exec(`
      DELETE FROM tasks;
      DELETE FROM events;
      DELETE FROM soldiers;
      DELETE FROM base_rooms;
      DELETE FROM research;
      DELETE FROM territories;
      INSERT INTO base_rooms (id) VALUES ('command');
      UPDATE game_state SET credits = 0, credits_earned = 0, invasion_meter = 15,
        streak_days = 0, last_completion_date = NULL,
        last_tick = datetime('now'), campaign_start = datetime('now');
    `);
    // Reset narrative BEFORE re-seeding soldiers
    narrative.resetNarrative();
    // Re-seed soldiers with templates
    createSoldierWithTemplate();
    // Re-seed territories
    const insertTer = db.prepare('INSERT INTO territories (id, status) VALUES (?, ?)');
    const starts = [
      ['north-america', 'xcom'], ['south-america', 'xcom'], ['europe', 'xcom'],
      ['russia', 'contested'], ['africa', 'xcom'], ['middle-east', 'alien'],
      ['central-asia', 'alien'], ['south-asia', 'xcom'], ['east-asia', 'xcom'],
      ['southeast-asia', 'xcom'], ['oceania', 'xcom'], ['antarctica', 'alien']
    ];
    for (const [id, status] of starts) insertTer.run(id, status);
    return { message: 'New campaign started' };
  }
};
