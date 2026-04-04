/**
 * UNOPCOM Narrative Engine
 * Manages soldier stories, relationships, reactions, and achievements.
 *
 * Character templates define personality, backstory chapters, and relationship behavior.
 * The engine evaluates unlock conditions each time a game event occurs,
 * reveals new chapters, generates reactions, and tracks achievements.
 */

const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, 'unopcom.sqlite'));

// ── Schema ───────────────────────────────────────────────────────────

db.exec(`
  -- Character templates: the authored blueprints
  CREATE TABLE IF NOT EXISTS character_templates (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    callsign TEXT NOT NULL,
    nationality TEXT,
    background TEXT,                        -- short pre-war summary
    personality TEXT NOT NULL DEFAULT '[]',  -- JSON array of trait strings
    motivation TEXT,                         -- one-line why they fight
    portrait_sprite TEXT                     -- sprite file reference
  );

  -- Story chapters: 50 per character, authored content
  CREATE TABLE IF NOT EXISTS story_chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id TEXT NOT NULL,
    chapter_num INTEGER NOT NULL,            -- 1-50
    tier TEXT NOT NULL,                       -- surface, roots, cracks, secrets, legacy
    title TEXT NOT NULL,
    content TEXT NOT NULL,                    -- the story text
    unlock_type TEXT NOT NULL,               -- missions, rank, event, relationship, time, streak, chance, manual
    unlock_value TEXT NOT NULL DEFAULT '',    -- JSON: threshold, event type, character ref, etc.
    is_achievement INTEGER DEFAULT 0,
    achievement_name TEXT,
    achievement_desc TEXT,
    UNIQUE(character_id, chapter_num)
  );

  -- Relationships: authored connections between character templates
  CREATE TABLE IF NOT EXISTS character_relationships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    char_a TEXT NOT NULL,
    char_b TEXT NOT NULL,
    rel_type TEXT NOT NULL,                  -- mentor_protege, rivals, old_friends, secret_connection, siblings, tension, bond
    description TEXT,                        -- authored description of the connection
    UNIQUE(char_a, char_b)
  );

  -- Reaction templates: how characters respond to events
  CREATE TABLE IF NOT EXISTS reaction_templates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id TEXT,                        -- NULL = any character with matching traits
    event_type TEXT NOT NULL,                -- mission_complete, soldier_kia, soldier_wounded, territory_lost, territory_defended, streak_milestone, rank_up, recruit, research
    trait_match TEXT,                         -- JSON array of traits that trigger this (if character_id is NULL)
    condition TEXT,                           -- JSON: optional extra condition (specific character involved, etc.)
    text TEXT NOT NULL,                       -- the reaction quote
    priority INTEGER DEFAULT 0               -- higher = preferred when multiple match
  );

  -- ── Runtime state (per soldier instance) ───────────────────────────

  -- Unlocked chapters for actual soldiers
  CREATE TABLE IF NOT EXISTS unlocked_chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    soldier_id INTEGER NOT NULL,
    chapter_id INTEGER NOT NULL,
    unlocked_at TEXT DEFAULT (datetime('now')),
    UNIQUE(soldier_id, chapter_id)
  );

  -- Soldier-to-template mapping (which template a soldier uses)
  -- We add this to soldiers table via migration

  -- Soldier trait cache (copied from template on creation, can evolve)
  -- Stored as JSON in soldiers table via migration

  -- Achievements earned
  CREATE TABLE IF NOT EXISTS achievements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    soldier_id INTEGER NOT NULL,
    chapter_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    earned_at TEXT DEFAULT (datetime('now'))
  );

  -- Lost stories (soldier died before chapter unlocked)
  CREATE TABLE IF NOT EXISTS lost_chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    soldier_id INTEGER NOT NULL,
    chapter_id INTEGER NOT NULL,
    chapter_title TEXT NOT NULL,
    chapter_num INTEGER NOT NULL,
    lost_at TEXT DEFAULT (datetime('now'))
  );
`);

// Migrations: add narrative columns to soldiers
try { db.exec("ALTER TABLE soldiers ADD COLUMN template_id TEXT DEFAULT NULL"); } catch(e) {}
try { db.exec("ALTER TABLE soldiers ADD COLUMN traits TEXT DEFAULT '[]'"); } catch(e) {}
try { db.exec("ALTER TABLE soldiers ADD COLUMN personality_desc TEXT DEFAULT ''"); } catch(e) {}
try { db.exec("ALTER TABLE soldiers ADD COLUMN cause_of_death TEXT DEFAULT NULL"); } catch(e) {}

// ── Constants ────────────────────────────────────────────────────────

const TIERS = {
  surface: { chapters: [1, 10],  label: 'Surface' },
  roots:   { chapters: [11, 20], label: 'Roots' },
  cracks:  { chapters: [21, 30], label: 'Cracks' },
  secrets: { chapters: [31, 40], label: 'Secrets' },
  legacy:  { chapters: [41, 50], label: 'Legacy' },
};

// Personality traits pool
const TRAIT_POOL = [
  'brave', 'cautious', 'optimistic', 'cynical', 'protective', 'reckless',
  'quiet', 'loud', 'analytical', 'emotional', 'loyal', 'independent',
  'humorous', 'serious', 'compassionate', 'ruthless', 'disciplined', 'rebellious',
  'idealistic', 'pragmatic', 'haunted', 'hopeful', 'stoic', 'volatile'
];

// Relationship types that can auto-form based on trait compatibility
const TRAIT_DYNAMICS = [
  { traits: ['brave', 'cautious'],       rel: 'tension',   desc: 'Opposing approaches create friction' },
  { traits: ['optimistic', 'cynical'],   rel: 'tension',   desc: 'Clashing worldviews' },
  { traits: ['protective', 'reckless'],  rel: 'bond',      desc: 'One worries, the other charges in' },
  { traits: ['quiet', 'loud'],           rel: 'bond',      desc: 'Unlikely pair, complementary' },
  { traits: ['analytical', 'emotional'], rel: 'tension',   desc: 'Head vs heart' },
  { traits: ['disciplined', 'rebellious'], rel: 'rivals',  desc: 'Order vs chaos' },
  { traits: ['humorous', 'serious'],     rel: 'bond',      desc: 'The comedian and the straight face' },
  { traits: ['haunted', 'hopeful'],      rel: 'bond',      desc: 'Light finding darkness' },
  { traits: ['idealistic', 'pragmatic'], rel: 'tension',   desc: 'Dreams vs reality' },
  { traits: ['compassionate', 'ruthless'], rel: 'tension', desc: 'Mercy vs efficiency' },
  { traits: ['loyal', 'independent'],    rel: 'bond',      desc: 'The anchor and the wanderer' },
  { traits: ['stoic', 'volatile'],       rel: 'tension',   desc: 'The calm and the storm' },
];

// ── Public API ───────────────────────────────────────────────────────

module.exports = {
  TIERS,
  TRAIT_POOL,

  // ── Template management ──────────────────────────────────────────

  registerTemplate(template) {
    db.prepare(`
      INSERT OR REPLACE INTO character_templates (id, name, callsign, nationality, background, personality, motivation, portrait_sprite)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      template.id, template.name, template.callsign,
      template.nationality || '', template.background || '',
      JSON.stringify(template.personality || []),
      template.motivation || '', template.portrait_sprite || ''
    );
    return template.id;
  },

  registerChapter(chapter) {
    db.prepare(`
      INSERT OR REPLACE INTO story_chapters (character_id, chapter_num, tier, title, content, unlock_type, unlock_value, is_achievement, achievement_name, achievement_desc)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      chapter.character_id, chapter.chapter_num, chapter.tier,
      chapter.title, chapter.content,
      chapter.unlock_type, JSON.stringify(chapter.unlock_value || {}),
      chapter.is_achievement ? 1 : 0,
      chapter.achievement_name || null, chapter.achievement_desc || null
    );
  },

  registerRelationship(rel) {
    db.prepare(`
      INSERT OR REPLACE INTO character_relationships (char_a, char_b, rel_type, description)
      VALUES (?, ?, ?, ?)
    `).run(rel.char_a, rel.char_b, rel.rel_type, rel.description || '');
  },

  registerReaction(reaction) {
    db.prepare(`
      INSERT INTO reaction_templates (character_id, event_type, trait_match, condition, text, priority)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      reaction.character_id || null,
      reaction.event_type,
      JSON.stringify(reaction.trait_match || []),
      JSON.stringify(reaction.condition || {}),
      reaction.text,
      reaction.priority || 0
    );
  },

  // ── Soldier-template binding ─────────────────────────────────────

  /** Assign a character template to a soldier. Copies traits. */
  assignTemplate(soldierId, templateId) {
    const tpl = db.prepare('SELECT * FROM character_templates WHERE id = ?').get(templateId);
    if (!tpl) return null;

    db.prepare(`
      UPDATE soldiers SET template_id = ?, name = ?, nickname = ?, traits = ?, personality_desc = ?
      WHERE id = ?
    `).run(templateId, tpl.name, tpl.callsign, tpl.personality, tpl.background, soldierId);

    // Auto-unlock Chapter 1 (recruitment)
    const ch1 = db.prepare('SELECT id FROM story_chapters WHERE character_id = ? AND chapter_num = 1').get(templateId);
    if (ch1) {
      db.prepare('INSERT OR IGNORE INTO unlocked_chapters (soldier_id, chapter_id) VALUES (?, ?)').run(soldierId, ch1.id);
    }

    return tpl;
  },

  /** Get available (unassigned) templates */
  getAvailableTemplates() {
    const assigned = db.prepare("SELECT template_id FROM soldiers WHERE template_id IS NOT NULL").all().map(r => r.template_id);
    return db.prepare('SELECT * FROM character_templates').all()
      .filter(t => !assigned.includes(t.id))
      .map(t => ({ ...t, personality: JSON.parse(t.personality || '[]') }));
  },

  // ── New recruit integration ──────────────────────────────────────

  /** When a new soldier joins, auto-detect relationships with existing roster */
  detectRelationships(soldierId) {
    const soldier = db.prepare('SELECT * FROM soldiers WHERE id = ?').get(soldierId);
    if (!soldier || !soldier.template_id) return [];

    const traits = JSON.parse(soldier.traits || '[]');
    const roster = db.prepare("SELECT * FROM soldiers WHERE id != ? AND status != 'kia' AND template_id IS NOT NULL").all(soldierId);
    const newRels = [];

    for (const other of roster) {
      const otherTraits = JSON.parse(other.traits || '[]');

      // Check for authored relationships
      const authored = db.prepare(
        'SELECT * FROM character_relationships WHERE (char_a = ? AND char_b = ?) OR (char_a = ? AND char_b = ?)'
      ).get(soldier.template_id, other.template_id, other.template_id, soldier.template_id);

      if (authored) {
        newRels.push({ soldier_a: soldierId, soldier_b: other.id, ...authored });
        continue;
      }

      // Auto-detect from trait dynamics
      for (const dyn of TRAIT_DYNAMICS) {
        const [t1, t2] = dyn.traits;
        if ((traits.includes(t1) && otherTraits.includes(t2)) ||
            (traits.includes(t2) && otherTraits.includes(t1))) {
          newRels.push({
            soldier_a: soldierId, soldier_b: other.id,
            rel_type: dyn.rel, description: dyn.desc,
            char_a: soldier.template_id, char_b: other.template_id
          });
          break; // one auto-relationship per pair
        }
      }
    }

    return newRels;
  },

  // ── Chapter unlock evaluation ────────────────────────────────────

  /**
   * Check all locked chapters for a soldier and unlock any whose conditions are met.
   * Called after mission completion, events, etc.
   * Returns array of newly unlocked chapters.
   */
  evaluateUnlocks(soldierId, context = {}) {
    const soldier = db.prepare('SELECT * FROM soldiers WHERE id = ?').get(soldierId);
    if (!soldier || !soldier.template_id || soldier.status === 'kia') return [];

    const unlockedIds = db.prepare('SELECT uc.chapter_id FROM unlocked_chapters uc JOIN story_chapters sc ON uc.chapter_id = sc.id WHERE uc.soldier_id = ?')
      .all(soldierId).map(r => r.chapter_id);

    const allChapters = db.prepare('SELECT * FROM story_chapters WHERE character_id = ? ORDER BY chapter_num')
      .all(soldier.template_id);

    const newUnlocks = [];

    for (const ch of allChapters) {
      if (unlockedIds.includes(ch.id)) continue;

      // Previous chapter must be unlocked (sequential)
      if (ch.chapter_num > 1) {
        const prevCh = allChapters.find(c => c.chapter_num === ch.chapter_num - 1);
        if (prevCh && !unlockedIds.includes(prevCh.id)) continue;
      }

      const condition = JSON.parse(ch.unlock_value || '{}');
      let unlocked = false;

      switch (ch.unlock_type) {
        case 'missions':
          unlocked = soldier.missions >= (condition.min || 1);
          break;

        case 'rank':
          unlocked = soldier.rank_level >= (condition.min || 0);
          break;

        case 'event':
          // Matches if the current event type matches
          unlocked = context.event_type === condition.event_type;
          // Optional: specific character involved
          if (condition.involves_template && context.involves_template !== condition.involves_template) unlocked = false;
          break;

        case 'relationship':
          // Requires a specific other character to be alive with X missions together
          if (condition.with_template) {
            const partner = db.prepare("SELECT * FROM soldiers WHERE template_id = ? AND status != 'kia'")
              .get(condition.with_template);
            unlocked = !!partner && soldier.missions >= (condition.min_missions || 5);
          }
          break;

        case 'time':
          // Days since soldier was created
          const created = new Date(soldier.created_at + 'Z');
          const daysSince = (Date.now() - created.getTime()) / 86400000;
          unlocked = daysSince >= (condition.min_days || 1);
          break;

        case 'streak': {
          // Unlock if current streak meets threshold OR soldier has enough missions
          const state = db.prepare('SELECT streak_days FROM game_state WHERE id = 1').get();
          const minStreak = condition.min || 3;
          const minMissions = condition.min_missions || minStreak * 4;
          unlocked = (state?.streak_days || 0) >= minStreak || soldier.missions >= minMissions;
          break;
        }

        case 'chance':
          // Random chance per evaluation (for small moments)
          unlocked = Math.random() < (condition.probability || 0.15);
          break;

        case 'manual':
          // Only unlocked via direct API call
          unlocked = false;
          break;

        default:
          unlocked = false;
      }

      if (unlocked) {
        db.prepare('INSERT OR IGNORE INTO unlocked_chapters (soldier_id, chapter_id) VALUES (?, ?)').run(soldierId, ch.id);
        unlockedIds.push(ch.id);
        newUnlocks.push(ch);

        // Track achievement
        if (ch.is_achievement) {
          db.prepare('INSERT INTO achievements (soldier_id, chapter_id, name, description) VALUES (?, ?, ?, ?)')
            .run(soldierId, ch.id, ch.achievement_name || ch.title, ch.achievement_desc || '');
        }
      }
    }

    return newUnlocks;
  },

  /** Evaluate unlocks for ALL active soldiers */
  evaluateAllUnlocks(context = {}) {
    const soldiers = db.prepare("SELECT s.id, s.template_id, ct.callsign FROM soldiers s LEFT JOIN character_templates ct ON s.template_id = ct.id WHERE s.status != 'kia' AND s.template_id IS NOT NULL").all();
    const allNew = [];
    for (const s of soldiers) {
      const newChs = this.evaluateUnlocks(s.id, context);
      for (const ch of newChs) {
        allNew.push({ soldier_id: s.id, character_name: s.callsign, ...ch });
      }
    }
    return allNew;
  },

  // ── Death handling ───────────────────────────────────────────────

  /** Called when a soldier dies. Marks remaining chapters as lost. */
  handleDeath(soldierId, causeOfDeath) {
    const soldier = db.prepare('SELECT * FROM soldiers WHERE id = ?').get(soldierId);
    if (!soldier || !soldier.template_id) return;

    // Update cause of death
    db.prepare('UPDATE soldiers SET cause_of_death = ? WHERE id = ?').run(causeOfDeath, soldierId);

    // Get all chapters for this character
    const allChapters = db.prepare('SELECT * FROM story_chapters WHERE character_id = ?').all(soldier.template_id);
    const unlocked = db.prepare('SELECT uc.chapter_id FROM unlocked_chapters uc JOIN story_chapters sc ON uc.chapter_id = sc.id WHERE uc.soldier_id = ?')
      .all(soldierId).map(r => r.chapter_id);

    // Mark unlocked chapters as lost
    for (const ch of allChapters) {
      if (!unlocked.includes(ch.id)) {
        db.prepare('INSERT INTO lost_chapters (soldier_id, chapter_id, chapter_title, chapter_num) VALUES (?, ?, ?, ?)')
          .run(soldierId, ch.id, ch.title, ch.chapter_num);
      }
    }

    // Generate grief reactions from squad mates
    this.generateGriefReactions(soldierId);
  },

  generateGriefReactions(deadSoldierId) {
    const dead = db.prepare('SELECT * FROM soldiers WHERE id = ?').get(deadSoldierId);
    if (!dead) return;

    const roster = db.prepare("SELECT * FROM soldiers WHERE id != ? AND status != 'kia' AND template_id IS NOT NULL")
      .all(deadSoldierId);

    for (const s of roster) {
      // Check for character-specific reactions
      const specific = db.prepare(
        "SELECT text FROM reaction_templates WHERE character_id = ? AND event_type = 'soldier_kia' AND condition LIKE ? ORDER BY priority DESC LIMIT 1"
      ).get(s.template_id, `%${dead.template_id}%`);

      if (specific) {
        const text = specific.text.replace('{name}', dead.nickname || dead.name);
        db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
          .run('reaction', `${s.nickname || s.name}`, text);
        continue;
      }

      // Check trait-based reactions
      const traits = JSON.parse(s.traits || '[]');
      for (const trait of traits) {
        const reaction = db.prepare(
          "SELECT text FROM reaction_templates WHERE character_id IS NULL AND event_type = 'soldier_kia' AND trait_match LIKE ? ORDER BY priority DESC LIMIT 1"
        ).get(`%${trait}%`);
        if (reaction) {
          const text = reaction.text.replace('{name}', dead.nickname || dead.name).replace('{soldier}', s.nickname || s.name);
          db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
            .run('reaction', `${s.nickname || s.name}`, text);
          break;
        }
      }
    }
  },

  // ── Reaction generation (for any event) ──────────────────────────

  /**
   * Generate reactions from soldiers for a given event.
   * Returns array of { soldier, text } objects and logs them as events.
   */
  generateReactions(eventType, context = {}) {
    const roster = db.prepare("SELECT * FROM soldiers WHERE status != 'kia' AND template_id IS NOT NULL").all();
    const reactions = [];

    // Pick at most 2 reactions per event to avoid spam
    const candidates = [];

    for (const s of roster) {
      // Character-specific reaction
      let reaction = db.prepare(
        "SELECT text, priority FROM reaction_templates WHERE character_id = ? AND event_type = ? ORDER BY priority DESC LIMIT 1"
      ).get(s.template_id, eventType);

      if (!reaction) {
        // Trait-based reaction
        const traits = JSON.parse(s.traits || '[]');
        for (const trait of traits) {
          reaction = db.prepare(
            "SELECT text, priority FROM reaction_templates WHERE character_id IS NULL AND event_type = ? AND trait_match LIKE ? ORDER BY priority DESC LIMIT 1"
          ).get(eventType, `%"${trait}"%`);
          if (reaction) break;
        }
      }

      if (reaction) {
        let text = reaction.text;
        // Replace placeholders
        text = text.replace('{soldier}', s.nickname || s.name);
        if (context.territory) text = text.replace('{territory}', context.territory);
        if (context.name) text = text.replace('{name}', context.name);
        candidates.push({ soldier: s, text, priority: reaction.priority || 0 });
      }
    }

    // Sort by priority, take top 2
    candidates.sort((a, b) => b.priority - a.priority);
    const selected = candidates.slice(0, 2);

    for (const r of selected) {
      db.prepare('INSERT INTO events (type, title, detail) VALUES (?, ?, ?)')
        .run('reaction', r.soldier.nickname || r.soldier.name, r.text);
      reactions.push(r);
    }

    return reactions;
  },

  // ── Query methods ────────────────────────────────────────────────

  /** Get full soldier profile with story progress */
  getSoldierProfile(soldierId) {
    const soldier = db.prepare('SELECT * FROM soldiers WHERE id = ?').get(soldierId);
    if (!soldier) return null;

    soldier.traits = JSON.parse(soldier.traits || '[]');

    if (!soldier.template_id) {
      return { ...soldier, chapters: [], relationships: [], progress: 0, total_chapters: 0 };
    }

    // Chapters
    const allChapters = db.prepare('SELECT * FROM story_chapters WHERE character_id = ? ORDER BY chapter_num')
      .all(soldier.template_id);
    const unlockedIds = new Set(
      db.prepare('SELECT uc.chapter_id FROM unlocked_chapters uc JOIN story_chapters sc ON uc.chapter_id = sc.id WHERE uc.soldier_id = ?')
        .all(soldierId).map(r => r.chapter_id)
    );
    const lostIds = new Set(
      db.prepare('SELECT lc.chapter_id FROM lost_chapters lc JOIN story_chapters sc ON lc.chapter_id = sc.id WHERE lc.soldier_id = ?')
        .all(soldierId).map(r => r.chapter_id)
    );

    const chapters = allChapters.map(ch => ({
      id: ch.id,
      num: ch.chapter_num,
      tier: ch.tier,
      title: unlockedIds.has(ch.id) || lostIds.has(ch.id) ? ch.title : '???',
      content: unlockedIds.has(ch.id) ? ch.content : null,
      state: unlockedIds.has(ch.id) ? 'unlocked' : lostIds.has(ch.id) ? 'lost' : 'locked',
      is_achievement: ch.is_achievement,
      achievement_name: ch.achievement_name,
    }));

    // Relationships
    const rels = this.getSoldierRelationships(soldierId);

    // Template info
    const template = db.prepare('SELECT * FROM character_templates WHERE id = ?').get(soldier.template_id);

    return {
      ...soldier,
      template,
      chapters,
      relationships: rels,
      progress: chapters.filter(c => c.state === 'unlocked').length,
      total_chapters: allChapters.length,
      lost_chapters: chapters.filter(c => c.state === 'lost').length,
    };
  },

  getSoldierRelationships(soldierId) {
    const soldier = db.prepare('SELECT * FROM soldiers WHERE id = ?').get(soldierId);
    if (!soldier || !soldier.template_id) return [];

    const authored = db.prepare(
      'SELECT * FROM character_relationships WHERE char_a = ? OR char_b = ?'
    ).all(soldier.template_id, soldier.template_id);

    const rels = [];
    for (const rel of authored) {
      const otherTemplateId = rel.char_a === soldier.template_id ? rel.char_b : rel.char_a;
      const otherSoldier = db.prepare("SELECT * FROM soldiers WHERE template_id = ?").get(otherTemplateId);
      if (otherSoldier) {
        rels.push({
          soldier_id: otherSoldier.id,
          name: otherSoldier.nickname || otherSoldier.name,
          status: otherSoldier.status,
          rel_type: rel.rel_type,
          description: rel.description,
        });
      }
    }
    return rels;
  },

  /** Get all achievements (earned + lost) */
  getAchievements() {
    const earned = db.prepare(`
      SELECT a.*, s.name as soldier_name, s.nickname as soldier_nickname
      FROM achievements a JOIN soldiers s ON a.soldier_id = s.id
      ORDER BY a.earned_at DESC
    `).all();

    const lost = db.prepare(`
      SELECT lc.*, s.name as soldier_name, s.nickname as soldier_nickname, sc.achievement_name, sc.achievement_desc
      FROM lost_chapters lc
      JOIN soldiers s ON lc.soldier_id = s.id
      JOIN story_chapters sc ON lc.chapter_id = sc.id
      WHERE sc.is_achievement = 1
      ORDER BY lc.lost_at DESC
    `).all();

    const total = db.prepare('SELECT COUNT(*) as c FROM story_chapters WHERE is_achievement = 1').get().c;

    return { earned, lost, total };
  },

  /** Get full achievement gallery — all possible achievements with state */
  getFullAchievementGallery() {
    // All achievement chapters across all templates
    const allAchievements = db.prepare(`
      SELECT sc.*, ct.name as char_name, ct.callsign as char_callsign
      FROM story_chapters sc
      JOIN character_templates ct ON sc.character_id = ct.id
      WHERE sc.is_achievement = 1
      ORDER BY ct.callsign, sc.chapter_num
    `).all();

    const earnedMap = {};
    const earned = db.prepare('SELECT * FROM achievements').all();
    for (const a of earned) earnedMap[a.chapter_id] = a;

    const lostMap = {};
    const lost = db.prepare('SELECT * FROM lost_chapters').all();
    for (const l of lost) lostMap[l.chapter_id] = l;

    return allAchievements.map(a => {
      const e = earnedMap[a.id];
      const l = lostMap[a.id];
      let state = 'locked';
      if (e) state = 'earned';
      else if (l) state = 'lost';

      return {
        id: a.id,
        character: a.char_callsign,
        character_name: a.char_name,
        chapter_num: a.chapter_num,
        tier: a.tier,
        name: state === 'locked' ? '???' : (a.achievement_name || a.title),
        desc: state === 'earned' ? (a.achievement_desc || '') : '',
        state,
        earned_at: e?.earned_at || null,
      };
    });
  },

  /** Get story progress overview for all soldiers */
  getAllStoryProgress() {
    const soldiers = db.prepare("SELECT * FROM soldiers WHERE template_id IS NOT NULL").all();
    return soldiers.map(s => {
      const total = db.prepare('SELECT COUNT(*) as c FROM story_chapters WHERE character_id = ?').get(s.template_id)?.c || 0;
      const unlocked = db.prepare('SELECT COUNT(*) as c FROM unlocked_chapters uc JOIN story_chapters sc ON uc.chapter_id = sc.id WHERE uc.soldier_id = ?').get(s.id)?.c || 0;
      const lost = db.prepare('SELECT COUNT(*) as c FROM lost_chapters lc JOIN story_chapters sc ON lc.chapter_id = sc.id WHERE lc.soldier_id = ?').get(s.id)?.c || 0;
      return {
        soldier_id: s.id,
        name: s.name,
        nickname: s.nickname,
        status: s.status,
        template_id: s.template_id,
        total, unlocked, lost,
        progress: total > 0 ? unlocked / total : 0,
      };
    });
  },

  // ── Reset ────────────────────────────────────────────────────────

  resetNarrative() {
    db.exec(`
      DELETE FROM unlocked_chapters;
      DELETE FROM achievements;
      DELETE FROM lost_chapters;
    `);
  },
};
