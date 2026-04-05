/* ── UNOPCOM v2 — Timer + Credits ─────────────────────────────────── */

const API = '/api';
const PRIORITY_LABELS = { 1: 'Trivial', 2: 'Moderate', 3: 'Critical', 4: 'Terror' };
const CATEGORY_ICONS = { combat: '\u2694', research: '\uD83D\uDD2C', engineering: '\uD83D\uDD27', recon: '\uD83D\uDC41' };
const EVENT_ICONS = {
  mission_complete: '\u2713', mission_fail: '\u2717', mission_reactivate: '\u21BB',
  soldier_promoted: '\u25B2', soldier_kia: '\u2020', soldier_wounded: '\u26A0',
  rank_up: '\u2605', shop: '\u25CF', base: '\u2302', research: '\u2622',
  reaction: '\u275E', territory: '\u25C6'
};
const ALIENS_BY_PRIORITY = {
  1: ['sectoid', 'floater'],
  2: ['sectoid', 'floater', 'snakeman'],
  3: ['muton', 'snakeman', 'ethereal'],
  4: ['ethereal', 'chryssalid', 'muton']
};

let currentFilter = 'active';
let gameState = {};
let cachedTasks = [];  // cached for client-side timer updates
const _phaseHistory = new Map(); // taskId → last-seen phase (for notification transitions)

// ── API ──────────────────────────────────────────────────────────────

async function api(path, opts = {}) {
  const res = await fetch(API + path, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
    body: opts.body ? JSON.stringify(opts.body) : undefined
  });
  return res.json();
}

// ── Init ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initTabs();
  initMissionForm();
  initFilters();
  initShop();
  initGameOver();
  initRestartCampaign();
  initKeyboard();
  initNotifications();
  refresh();
  setInterval(tickTimers, 1000);
  setInterval(refresh, 60000);
});

// ── Duration parsing ─────────────────────────────────────────────────

function parseDuration(input) {
  if (!input) return 0;
  const str = input.toString().trim().toLowerCase();

  // Pure number = minutes
  if (/^\d+$/.test(str)) return parseInt(str);

  let total = 0;
  const weeks = str.match(/(\d+(?:\.\d+)?)\s*w/);
  const days  = str.match(/(\d+(?:\.\d+)?)\s*d/);
  const hours = str.match(/(\d+(?:\.\d+)?)\s*h/);
  const mins  = str.match(/(\d+(?:\.\d+)?)\s*m(?:in)?/);

  if (weeks) total += parseFloat(weeks[1]) * 10080;
  if (days)  total += parseFloat(days[1]) * 1440;
  if (hours) total += parseFloat(hours[1]) * 60;
  if (mins)  total += parseFloat(mins[1]);

  return Math.round(total) || 0;
}

// ── Countdown formatting ─────────────────────────────────────────────

function formatDurationLabel(minutes) {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (minutes >= 1440) {
    const d = Math.floor(minutes / 1440);
    const rem = minutes % 1440;
    return rem === 0 ? `${d}d` : `${d}d ${Math.floor(rem / 60)}h`;
  }
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
}

function formatCountdown(totalSeconds) {
  const abs = Math.abs(totalSeconds);
  const s = Math.floor(abs % 60);
  const m = Math.floor((abs / 60) % 60);
  const h = Math.floor((abs / 3600) % 24);
  const d = Math.floor(abs / 86400);

  const pad = n => String(n).padStart(2, '0');

  let str;
  if (d > 0) {
    str = `${d}d ${pad(h)}:${pad(m)}:${pad(s)}`;
  } else {
    str = `${pad(h)}:${pad(m)}:${pad(s)}`;
  }
  return totalSeconds < 0 ? `+${str}` : str;
}

function getTimerState(task) {
  if (task.status !== 'active') return null;
  const created = new Date(task.created_at + 'Z').getTime();
  const deadline = created + task.duration_minutes * 60000;
  const remaining = deadline - Date.now();
  const remainingSec = Math.round(remaining / 1000);
  const dur = task.duration_minutes * 60000;
  const overtime = -remaining;
  const ratio = dur > 0 ? overtime / dur : 0;

  let phase;
  if (remaining > 0)     phase = 'on_time';
  else if (ratio <= 0.5) phase = 'grace';
  else if (ratio <= 1.0) phase = 'overdue';
  else                   phase = 'critical';

  return { phase, remainingSec, ratio };
}

// ── Notifications ─────────────────────────────────────────────────────

function initNotifications() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

function _fireNotification(task, phase) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  const PRIORITY_NAMES = { 1: 'Trivial', 2: 'Moderate', 3: 'Critical', 4: 'Terror' };
  const pri = PRIORITY_NAMES[task.priority] || '';
  if (phase === 'overdue') {
    new Notification(`⚠ MISSION OVERDUE — ${task.title}`, {
      body: `${pri} priority. Soldier at risk of injury. Complete now.`,
      tag: `task-${task.id}-overdue`,
    });
  } else if (phase === 'critical') {
    new Notification(`✗ CRITICAL OVERDUE — ${task.title}`, {
      body: `${pri} priority. Soldier KIA imminent. Complete immediately.`,
      tag: `task-${task.id}-critical`,
    });
  }
}

// ── Client-side timer tick (every second) ────────────────────────────

function tickTimers() {
  // Scheduled task "starts in" timers
  document.querySelectorAll('[data-scheduled-timer]').forEach(el => {
    const taskId = parseInt(el.dataset.scheduledTimer);
    const task = cachedTasks.find(t => t.id === taskId);
    if (!task) return;
    const remaining = new Date(task.scheduled_start + 'Z').getTime() - Date.now();
    const remainingSec = Math.round(remaining / 1000);
    el.textContent = remaining > 0 ? 'in ' + formatCountdown(remainingSec) : 'STARTING...';
  });

  // Hold directive countdown timers
  document.querySelectorAll('[data-hold-timer]').forEach(el => {
    const taskId = parseInt(el.dataset.holdTimer);
    const task = cachedTasks.find(t => t.id === taskId);
    if (!task) return;
    const deadline = new Date(task.created_at + 'Z').getTime() + task.duration_minutes * 60000;
    const remaining = deadline - Date.now();
    const remainingSec = Math.round(remaining / 1000);
    if (remaining <= 0) {
      el.textContent = 'SUCCESS PENDING';
      el.className = 'hold-timer success-pending';
    } else {
      el.textContent = formatCountdown(remainingSec);
    }
  });

  // Update per-card timers
  document.querySelectorAll('[data-task-timer]').forEach(el => {
    const taskId = parseInt(el.dataset.taskTimer);
    const task = cachedTasks.find(t => t.id === taskId);
    if (!task) return;

    const state = getTimerState(task);
    if (!state) return;

    el.textContent = formatCountdown(state.remainingSec);
    el.className = `mission-timer ${state.phase}`;

    const card = el.closest('.mission-card');
    if (card) {
      card.classList.remove('ot-grace', 'ot-overdue', 'ot-critical');
      if (state.phase !== 'on_time') card.classList.add(`ot-${state.phase}`);
    }

    // Fire notification on phase transitions into overdue / critical
    const prev = _phaseHistory.get(taskId);
    if (prev !== state.phase) {
      _phaseHistory.set(taskId, state.phase);
      if ((state.phase === 'overdue' || state.phase === 'critical') &&
          prev !== undefined) {  // prev undefined = first render, don't notify
        _fireNotification(task, state.phase);
      }
    }
  });

  // Update the big header deadline timer
  tickDeadline();
}

function tickDeadline() {
  const timerEl = document.getElementById('deadline-timer');
  const labelEl = document.getElementById('deadline-label');
  const active = cachedTasks.filter(t => t.status === 'active' && t.type !== 'resistance');

  if (!active.length) {
    timerEl.textContent = '--:--:--';
    timerEl.className = 'deadline-timer idle';
    labelEl.textContent = 'NO ACTIVE MISSIONS';
    return;
  }

  // Find task with nearest deadline (created_at + duration)
  let nearest = null;
  let nearestDeadline = Infinity;
  for (const t of active) {
    const deadline = new Date(t.created_at + 'Z').getTime() + t.duration_minutes * 60000;
    if (deadline < nearestDeadline) {
      nearestDeadline = deadline;
      nearest = t;
    }
  }

  const state = getTimerState(nearest);
  if (!state) return;

  timerEl.textContent = formatCountdown(state.remainingSec);
  timerEl.className = `deadline-timer ${state.phase}`;
  labelEl.textContent = nearest.title;
}

// ── Tabs ─────────────────────────────────────────────────────────────

function initTabs() {
  document.querySelectorAll('#tab-bar .tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tab-bar .tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
      refresh();
    });
  });
}

// ── Refresh ──────────────────────────────────────────────────────────

async function refresh() {
  gameState = await api('/game/state');
  checkGameOver();
  updateHeader();
  updateInvasionMeter();
  updateDashboard();
  updateMissionList();
  updateMap();
  updateBase();
  updateResearch();
  updateSoldiers();
  updateStory();
  updateAchievementsTab();
  updateEventLog();
}

function checkGameOver() {
  const overlay = document.getElementById('game-over');
  if (gameState.invasion_meter >= 100) {
    // Stats grid
    const stats = [
      { value: `Day ${gameState.campaign_days}`, label: 'Campaign Length' },
      { value: gameState.rank_name, label: 'Final Rank' },
      { value: gameState.total_completed, label: 'Missions Completed' },
      { value: gameState.total_abandoned, label: 'Missions Abandoned' },
      { value: gameState.credits_earned, label: 'Credits Earned' },
      { value: gameState.active_soldiers, label: 'Soldiers Surviving' },
      { value: gameState.wounded_soldiers, label: 'Soldiers Wounded' },
      { value: gameState.kia_soldiers, label: 'Soldiers KIA' },
      { value: gameState.streak_days, label: 'Last Streak' },
    ];
    document.getElementById('game-over-stats').innerHTML = stats.map(s =>
      `<div class="game-over-stat">
        <span class="game-over-stat-value">${s.value}</span>
        <span class="game-over-stat-label">${s.label}</span>
      </div>`
    ).join('');

    // Fallen soldiers list
    updateGameOverFallen();

    overlay.classList.add('active');
  } else {
    overlay.classList.remove('active');
  }
}

async function updateGameOverFallen() {
  const soldiers = await api('/game/soldiers');
  const fallen = soldiers.filter(s => s.status === 'kia');
  const el = document.getElementById('game-over-fallen');
  if (!fallen.length) {
    el.innerHTML = '';
    return;
  }
  el.innerHTML = `<div class="go-fallen-title">\u2020 THE FALLEN</div>` +
    fallen.map(s => {
      const rankName = SOLDIER_RANKS[s.rank_level] || 'Rookie';
      return `<div class="go-fallen-name">${rankName} ${s.nickname ? '"' + s.nickname + '" ' : ''}${s.name} \u2014 ${s.missions} missions</div>`;
    }).join('');
}

function initGameOver() {
  document.getElementById('btn-new-campaign').addEventListener('click', async () => {
    const ok = await showConfirm(
      'NEW CAMPAIGN',
      'Start a new campaign?<div class="confirm-warn">All tasks, soldiers, credits, and progress will be permanently erased.</div>',
      'START NEW CAMPAIGN', true
    );
    if (!ok) return;
    await api('/game/reset', { method: 'POST' });
    storyDetailSoldierId = null;
    document.getElementById('game-over').classList.remove('active');
    refresh();
  });
}

function initRestartCampaign() {
  document.getElementById('btn-restart-campaign').addEventListener('click', async () => {
    const ok = await showConfirm(
      'RESTART CAMPAIGN',
      'Abort this campaign and start over?<div class="confirm-warn">All tasks, soldiers, credits, research, and base progress will be permanently erased.</div>',
      'RESTART', true
    );
    if (!ok) return;
    await api('/game/reset', { method: 'POST' });
    storyDetailSoldierId = null;
    refresh();
  });
}

function updateHeader() {
  document.getElementById('rank-badge').textContent = gameState.rank_name;
  document.getElementById('streak-display').textContent = gameState.streak_days;
  document.getElementById('credits-display').textContent = `${gameState.credits} CR`;
}

function updateInvasionMeter() {
  const pct = Math.round(gameState.invasion_meter);
  const fill = document.getElementById('invasion-fill');
  fill.style.width = `${pct}%`;
  fill.className = 'invasion-fill';
  if (pct >= 80) fill.classList.add('critical');
  else if (pct >= 60) fill.classList.add('danger');
  else if (pct >= 35) fill.classList.add('warning');

  const val = document.getElementById('invasion-value');
  val.textContent = `${pct}%`;
  val.style.color = pct >= 60 ? 'var(--red)' : pct >= 35 ? 'var(--orange)' : 'var(--green)';

  // Threat narrative
  const tn = document.getElementById('threat-name');
  tn.textContent = gameState.threat_name || 'Minimal';
  tn.className = `threat-name ${(gameState.threat_name || 'minimal').toLowerCase()}`;
}

function updateDashboard() {
  document.getElementById('stat-active').textContent = gameState.active_tasks;
  document.getElementById('stat-overtime').textContent = gameState.overtime_tasks;
  document.getElementById('stat-completed').textContent = gameState.total_completed;
  document.getElementById('stat-soldiers').textContent = gameState.active_soldiers;

  document.getElementById('current-rank').textContent = gameState.rank_name;
  const nr = gameState.next_rank;
  document.getElementById('next-rank').textContent = nr ? `\u2192 ${nr.name} (${nr.credits} CR)` : 'MAX RANK';
  document.getElementById('rank-progress-fill').style.width = `${Math.round(gameState.rank_progress * 100)}%`;

  // Campaign stats bar
  const kiaClass = gameState.kia_soldiers > 0 ? 'cb-kia' : 'cb-val';
  document.getElementById('campaign-bar').innerHTML =
    `<span>Day <span class="cb-val">${gameState.campaign_days}</span></span>` +
    `<span>Missions <span class="cb-val">${gameState.total_completed}</span></span>` +
    `<span>KIA <span class="${kiaClass}">${gameState.kia_soldiers}</span></span>`;

  // Active bonuses
  const bonusEl = document.getElementById('bonuses-list');
  if (gameState.active_bonuses?.length) {
    bonusEl.innerHTML = gameState.active_bonuses.map(b =>
      `<span class="bonus-tag">${b.label}<span class="bonus-effect">${b.effect}</span></span>`
    ).join('');
  } else {
    bonusEl.innerHTML = '<div class="bonuses-empty">No active bonuses. Build facilities and maintain streaks.</div>';
  }

  // Iron Will charges display
  const iwChargesEl = document.getElementById('iron-will-charges');
  const charges = gameState.iron_will_charges || 0;
  if (iwChargesEl) {
    if (charges > 0) {
      iwChargesEl.textContent = `${charges} held`;
      iwChargesEl.style.display = '';
    } else {
      iwChargesEl.style.display = 'none';
    }
  }

  // Territory summary
  const ts = gameState.territory_stats || {};
  const terSummary = document.getElementById('territory-summary');
  if (terSummary) {
    terSummary.innerHTML =
      `<span class="ter-sum-item un">${(ts.xcom || 0) + (ts.fortified || 0)} UN</span>` +
      `<span class="ter-sum-item contested">${ts.contested || 0} Contested</span>` +
      `<span class="ter-sum-item alien">${ts.alien || 0} Alien</span>`;
  }

  renderTaskList('dashboard-tasks', 'active', true);
}

// ── Mission List ─────────────────────────────────────────────────────

async function renderTaskList(containerId, status, compact) {
  const tasks = await api(`/tasks${status ? `?status=${status}` : ''}`);
  const el = document.getElementById(containerId);

  // Cache active tasks for client-side timer ticking
  if (status === 'active') {
    cachedTasks = tasks;
    // Prune phase history for tasks no longer active
    const activeIds = new Set(tasks.map(t => t.id));
    for (const id of _phaseHistory.keys()) {
      if (!activeIds.has(id)) _phaseHistory.delete(id);
    }
  }

  if (!tasks.length) {
    el.innerHTML = `<div class="empty-state">${status === 'active' ? 'No active missions. Deploy one!' : 'No missions found.'}</div>`;
    return;
  }

  el.innerHTML = tasks.map(t => {
    // ── Scheduled task card ─────────────────────────────────────────
    if (t.status === 'scheduled') {
      const startMs = new Date(t.scheduled_start + 'Z').getTime();
      const remaining = startMs - Date.now();
      const remainingSec = Math.round(remaining / 1000);
      const startLabel = new Date(t.scheduled_start + 'Z').toLocaleString([], {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      const endMs = startMs + t.duration_minutes * 60000;
      const endLabel = new Date(endMs).toLocaleString([], {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      const durLabel = formatDurationLabel(t.duration_minutes);
      const typeTag = t.type === 'resistance'
        ? '<span class="mission-tag hold-directive-tag">HOLD DIRECTIVE</span>'
        : `<span class="mission-tag">${CATEGORY_ICONS[t.category] || ''} ${t.category}</span>`;
      const actions = compact ? '' : `<div class="mission-actions">
        <button class="btn-icon" onclick="editMission(${t.id})" title="Edit">\u270E</button>
        <button class="btn-icon" onclick="deleteMission(${t.id})" title="Delete">\u2421</button>
      </div>`;
      return `
        <div class="mission-card scheduled priority-${t.priority}">
          <div class="scheduled-clock">\u23F0</div>
          <div class="mission-body">
            <div class="mission-title">${esc(t.title)}</div>
            ${t.description ? `<div class="mission-desc">${esc(t.description)}</div>` : ''}
            <div class="mission-meta">
              ${typeTag}
              <span class="mission-tag scheduled-tag">SCHEDULED</span>
              <span class="scheduled-window">${startLabel} \u2192 ${endLabel} &middot; ${durLabel}</span>
              <span class="scheduled-timer" data-scheduled-timer="${t.id}">${remaining > 0 ? 'in ' + formatCountdown(remainingSec) : 'STARTING...'}</span>
            </div>
          </div>
          ${actions}
        </div>`;
    }

    // ── Hold Directive card ─────────────────────────────────────────
    if (t.type === 'resistance') {
      const deadline = new Date(t.created_at + 'Z').getTime() + t.duration_minutes * 60000;
      const remaining = deadline - Date.now();
      const remainingSec = Math.round(remaining / 1000);
      const streak = t.hold_streak || 0;

      const streakHtml = streak > 0
        ? `<span class="hold-streak">\u29BF ${streak} day${streak !== 1 ? 's' : ''}</span>` : '';

      const timerHtml = remaining <= 0
        ? `<span class="hold-timer success-pending">SUCCESS PENDING</span>`
        : `<span class="hold-timer" data-hold-timer="${t.id}">${formatCountdown(remainingSec)}</span>`;

      const actions = compact ? '' : `<div class="mission-actions">
        <button class="btn-icon" onclick="editMission(${t.id})" title="Edit">\u270E</button>
        <button class="btn-icon" onclick="deleteMission(${t.id})" title="Remove">\u2421</button>
        <button class="btn-icon danger" onclick="breachDirective(${t.id})" title="Log Breach">\u26A0</button>
      </div>`;

      return `
        <div class="mission-card type-resistance priority-${t.priority} status-${t.status}">
          <div class="resistance-shield">\u25C8</div>
          <div class="mission-body">
            <div class="mission-title">${esc(t.title)}</div>
            ${t.description ? `<div class="mission-desc">${esc(t.description)}</div>` : ''}
            <div class="mission-meta">
              <span class="mission-tag hold-directive-tag">HOLD DIRECTIVE</span>
              ${streakHtml}
              ${timerHtml}
            </div>
          </div>
          ${actions}
        </div>`;
    }

    // ── Standard mission card ───────────────────────────────────────
    const timer = getTimerState(t);
    const otClass = (timer && timer.phase !== 'on_time') ? `ot-${timer.phase}` : '';
    const classes = [
      'mission-card',
      `priority-${t.priority}`,
      `status-${t.status}`,
      otClass
    ].filter(Boolean).join(' ');

    const checkContent = t.status === 'completed' ? '\u2713' : '';
    const checkDisabled = t.status !== 'active' ? 'style="cursor:default;pointer-events:none"' : '';

    let meta = `<span class="mission-tag">${CATEGORY_ICONS[t.category] || ''} ${t.category}</span>`;
    if (t.priority >= 3) meta += `<span class="mission-tag priority-${t.priority}">${PRIORITY_LABELS[t.priority]}</span>`;
    if (t.territory_id) {
      const terName = t.territory_id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const isTerror = t.priority === 4 && t.description?.includes('Alien forces');
      if (isTerror) {
        meta += `<span class="mission-tag terror-tag">\u26A0 TERROR: ${terName}</span>`;
      } else {
        meta += `<span class="mission-tag">\u25CB ${terName}</span>`;
      }
    }

    if (t.status === 'active' && timer) {
      meta += `<span class="mission-timer ${timer.phase}" data-task-timer="${t.id}">${formatCountdown(timer.remainingSec)}</span>`;
    }
    if (t.status === 'completed' && t.credits_awarded) meta += `<span class="mission-tag cr">+${t.credits_awarded} CR</span>`;

    let actions = '';
    if (!compact) {
      if (t.status === 'active') {
        actions = `<div class="mission-actions">
          <button class="btn-icon" onclick="editMission(${t.id})" title="Edit">\u270E</button>
          <button class="btn-icon" onclick="deleteMission(${t.id})" title="Delete">\u2421</button>
          <button class="btn-icon danger" onclick="abandonMission(${t.id})" title="Abandon">\u2717</button>
        </div>`;
      } else if (t.status === 'completed' || t.status === 'abandoned') {
        actions = `<div class="mission-actions">
          <button class="btn-icon" onclick="reactivateMission(${t.id})" title="Reactivate">\u21BB</button>
        </div>`;
      }
    }

    return `
      <div class="${classes}">
        <button class="mission-check" ${checkDisabled} onclick="completeMission(${t.id})">${checkContent}</button>
        <div class="mission-body">
          <div class="mission-title">${esc(t.title)}</div>
          ${t.description ? `<div class="mission-desc">${esc(t.description)}</div>` : ''}
          <div class="mission-meta">${meta}</div>
        </div>
        ${actions}
      </div>`;
  }).join('');
}

function updateMissionList() {
  renderTaskList('mission-list', currentFilter || '', false);
}

// ── Filters ──────────────────────────────────────────────────────────

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      updateMissionList();
    });
  });
}

// ── Complete ─────────────────────────────────────────────────────────

async function completeMission(id) {
  // Flash the card
  const card = document.querySelector(`.mission-card button[onclick="completeMission(${id})"]`)?.closest('.mission-card');
  if (card) card.classList.add('completing');

  const result = await api(`/tasks/${id}/complete`, { method: 'POST' });
  if (result.error) return;
  showDebrief(result);

  // Pulse credit counter
  const creditsEl = document.getElementById('credits-display');
  creditsEl.classList.add('pulse');
  setTimeout(() => creditsEl.classList.remove('pulse'), 500);

  refresh();
}

function showDebrief(r) {
  const pool = ALIENS_BY_PRIORITY[r.task.priority] || ALIENS_BY_PRIORITY[2];
  const sprite = pool[Math.floor(Math.random() * pool.length)];
  let html = `
    <img class="debrief-sprite" src="assets/sprites/${sprite}.png" alt="">
    <div class="debrief-credits">+${r.credits_earned} CR</div>
  `;

  // Credit breakdown
  if (r.breakdown?.length) {
    html += '<div class="debrief-breakdown">';
    for (const b of r.breakdown) {
      html += `<div class="breakdown-row"><span class="br-label">${b.label}</span><span class="br-value">${b.running !== undefined ? b.running : b.value}</span></div>`;
    }
    html += `<div class="breakdown-row br-total"><span class="br-label">TOTAL</span><span class="br-value">${r.credits_earned} CR</span></div>`;
    html += '</div>';
  }

  html += '<div class="debrief-details">';
  html += `<div class="debrief-line good">\u2713 Mission "${esc(r.task.title)}" complete</div>`;
  html += `<div class="debrief-line good">\u25BC Threat reduced by ${r.invasion_reduction}</div>`;

  if (r.on_time) html += `<div class="debrief-line gold">\u2605 On time bonus!</div>`;
  if (r.overtime_phase === 'grace') html += `<div class="debrief-line warn">\u26A0 Slight overtime \u2014 no bonus</div>`;
  if (r.overtime_phase === 'overdue') html += `<div class="debrief-line bad">\u26A0 Overdue \u2014 credits reduced</div>`;
  if (r.overtime_phase === 'critical') html += `<div class="debrief-line bad">\u2717 Critical overtime \u2014 heavy penalty</div>`;
  if (r.streak > 1) html += `<div class="debrief-line gold">\uD83D\uDD25 ${r.streak} day streak!</div>`;
  if (r.rank_up) html += `<div class="debrief-line gold">\u2605 PROMOTED TO ${r.rank_up.toUpperCase()}!</div>`;

  if (r.soldier_promoted?.promoted) {
    const s = r.soldier_promoted;
    html += `<div class="debrief-line">\u25B2 ${s.nickname || s.name} \u2192 ${s.rank_name}</div>`;
  }

  // Near-miss callout
  if (r.near_miss) {
    const nm = r.near_miss;
    html += `<div class="debrief-line near-miss">\u25C6 Titan Armor saved ${nm.nickname || nm.name} from death!</div>`;
  }

  // Wounded with full record
  if (r.soldier_wounded) {
    const s = r.soldier_wounded;
    html += `<div class="debrief-line bad">\u26A0 ${s.nickname || s.name} wounded!</div>`;
    html += `<div class="debrief-soldier-record">${s.rank_name} \u00B7 ${s.missions} missions \u00B7 ${s.days_served || 0} days served</div>`;
  }

  // KIA with full record
  if (r.soldier_kia) {
    const s = r.soldier_kia;
    html += `<div class="debrief-line bad">\u2020 ${s.nickname || s.name} \u2014 KILLED IN ACTION</div>`;
    html += `<div class="debrief-soldier-record">${s.rank_name} \u00B7 ${s.missions} missions \u00B7 ${s.days_served || 0} days served</div>`;
  }

  if (r.territory) {
    if (r.territory.action === 'defended') {
      html += `<div class="debrief-line good">\u25C6 ${r.territory.territory} defended!</div>`;
    } else if (r.territory.action === 'assaulting') {
      html += `<div class="debrief-line gold">\u25C6 Assault on ${r.territory.territory} begun \u2014 one more to liberate</div>`;
    } else if (r.territory.action === 'liberated') {
      html += `<div class="debrief-line good">\u25C6 ${r.territory.territory} LIBERATED!</div>`;
    } else if (r.territory.action === 'antarctica_liberated') {
      html += `<div class="debrief-line gold">\u2605 ALIEN BASE DESTROYED \u2014 Antarctica liberated!</div>`;
      html += `<div class="debrief-line gold">\u2605 Invasion drift permanently halved!</div>`;
    }
  }
  if (r.research_unlocked?.length) {
    for (const tech of r.research_unlocked) {
      html += `<div class="debrief-line gold">\u2622 Research Complete: ${tech.name}</div>`;
    }
  }
  if (r.story_unlocks?.length) {
    html += `<div class="debrief-intel-header">\u25A0 INTEL RECOVERED</div>`;
    for (const ch of r.story_unlocks) {
      const icon = ch.is_achievement ? '\u2605' : '\u25B6';
      const label = ch.is_achievement ? 'Achievement' : `${ch.character_name || 'Personnel'} \u2014 Chapter ${ch.chapter_num}`;
      html += `
        <div class="debrief-intel-card">
          <div class="debrief-intel-label">${icon} ${label}</div>
          <div class="debrief-intel-title">${esc(ch.title)}</div>
        </div>`;
    }
  }
  if (r.reactions?.length) {
    html += `<div class="debrief-intel-header">\u25A0 FROM THE BARRACKS</div>`;
    for (const rx of r.reactions) {
      html += `<div class="debrief-reaction"><span class="debrief-reaction-name">${esc(rx.name)}</span> \u2014 \u201C${esc(rx.text)}\u201D</div>`;
    }
  }
  html += '</div>';

  document.getElementById('debrief-content').innerHTML = html;
  const modal = document.getElementById('modal-debrief');
  const debriefPanel = modal.querySelector('.debrief');
  debriefPanel.classList.remove('animate-in');
  modal.classList.add('open');
  // Trigger animation
  requestAnimationFrame(() => debriefPanel.classList.add('animate-in'));
  document.getElementById('btn-close-debrief').onclick = () => {
    modal.classList.remove('open');
  };
}

// ── Edit Mission ─────────────────────────────────────────────────────

let editingTaskId = null;

async function editMission(id) {
  const task = await api(`/tasks/${id}`);
  if (!task || (task.status !== 'active' && task.status !== 'scheduled')) return;

  editingTaskId = id;
  document.getElementById('input-title').value = task.title;
  document.getElementById('input-desc').value = task.description || '';
  document.getElementById('input-priority').value = task.priority;
  document.getElementById('input-category').value = task.category;
  document.getElementById('input-territory').value = task.territory_id || '';

  // Populate schedule fields if task was scheduled
  if (task.scheduled_start) {
    // Convert UTC to local datetime-local format
    const startLocal = new Date(task.scheduled_start + 'Z');
    document.getElementById('input-start').value = toDatetimeLocal(startLocal);
    const endLocal = new Date(startLocal.getTime() + task.duration_minutes * 60000);
    document.getElementById('input-end').value = toDatetimeLocal(endLocal);
    document.getElementById('input-duration').value = '';
  } else {
    const mins = task.duration_minutes;
    let durStr;
    if (mins >= 10080 && mins % 10080 === 0) durStr = `${mins / 10080}w`;
    else if (mins >= 1440 && mins % 1440 === 0) durStr = `${mins / 1440}d`;
    else if (mins >= 60 && mins % 60 === 0) durStr = `${mins / 60}h`;
    else if (mins >= 60) durStr = `${Math.floor(mins / 60)}h ${mins % 60}m`;
    else durStr = `${mins}m`;
    document.getElementById('input-duration').value = durStr;
  }

  // Set type toggle
  const typeBtns = document.querySelectorAll('.type-btn');
  typeBtns.forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.type-btn[data-type="${task.type || 'mission'}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  document.getElementById('input-type').value = task.type || 'mission';

  document.querySelector('#modal-new-mission .modal-title').textContent = 'EDIT MISSION';
  document.querySelector('#form-new-mission .btn-primary').textContent = 'UPDATE';
  document.getElementById('modal-new-mission').classList.add('open');
  document.getElementById('input-title').focus();
}

function toDatetimeLocal(date) {
  const pad = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

// ── Delete (no consequences) ─────────────────────────────────────────

async function deleteMission(id) {
  const ok = await showConfirm('DELETE MISSION', 'Remove this mission?<div class="confirm-warn">No game consequences.</div>', 'DELETE');
  if (!ok) return;
  await api(`/tasks/${id}`, { method: 'DELETE' });
  refresh();
}

// ── Abandon ──────────────────────────────────────────────────────────

async function abandonMission(id) {
  const ok = await showConfirm(
    'ABORT MISSION',
    'Abandon this mission?<div class="confirm-warn">Threat +8. A soldier may be lost.</div>',
    'ABANDON', true
  );
  if (!ok) return;
  const result = await api(`/tasks/${id}/abandon`, { method: 'POST' });
  if (result.error) return;
  toast(`Mission abandoned. Threat +${result.invasion_increase}.`, 'error');
  if (result.soldier_lost) {
    toast(`${result.soldier_lost.nickname || result.soldier_lost.name} is KIA.`, 'error');
  }
  refresh();
}

// ── Breach Hold Directive ─────────────────────────────────────────────

async function breachDirective(id) {
  const task = cachedTasks.find(t => t.id === id);
  const streak = task?.hold_streak || 0;
  const streakWarn = streak > 0
    ? `<div class="confirm-warn">${streak} day streak will be lost.</div>` : '';

  const ok = await showConfirm(
    'LOG BREACH',
    `Admit failure on "${esc(task?.title || 'directive')}"?<div class="confirm-warn">Threat increase. Soldier at risk of injury.</div>${streakWarn}`,
    'BREACH', true
  );
  if (!ok) return;

  const result = await api(`/tasks/${id}/breach`, { method: 'POST' });
  if (result.error) { toast(result.error, 'error'); return; }

  showBreachReport(result);
  refresh();
}

function showBreachReport(r) {
  const modal = document.getElementById('modal-debrief');
  let html = '<div class="debrief-details">';

  if (r.iron_will_used) {
    html += `<div class="debrief-line gold">\u29BF Iron Will absorbed the breach!</div>`;
    html += `<div class="debrief-line good">Streak preserved: ${r.hold_streak} day${r.hold_streak !== 1 ? 's' : ''}. Timer reset.</div>`;
  } else {
    html += `<div class="debrief-line bad">\u2717 Perimeter compromised: ${esc(r.task?.title || '')}</div>`;
    html += `<div class="debrief-line bad">\u25B2 Threat +${r.invasion_increase}</div>`;
    if (r.hold_streak_lost > 0) {
      html += `<div class="debrief-line bad">\u29BF ${r.hold_streak_lost} day streak lost</div>`;
    }
    if (r.soldier_wounded) {
      html += `<div class="debrief-line bad">\u26A0 ${r.soldier_wounded.nickname || r.soldier_wounded.name} wounded</div>`;
    }
    html += `<div class="debrief-line">Directive reset. Hold the line next cycle.</div>`;
    if (r.reactions?.length) {
      html += `<div class="debrief-intel-header">\u25A0 FROM THE BARRACKS</div>`;
      for (const rx of r.reactions) {
        html += `<div class="debrief-reaction"><span class="debrief-reaction-name">${esc(rx.name)}</span> \u2014 \u201C${esc(rx.text)}\u201D</div>`;
      }
    }
  }

  html += '</div>';
  document.getElementById('debrief-content').innerHTML = html;
  modal.querySelector('.modal-title').textContent = r.iron_will_used ? 'IRON WILL' : 'BREACH REPORT';
  const panel = modal.querySelector('.debrief');
  panel.classList.remove('animate-in');
  modal.classList.add('open');
  requestAnimationFrame(() => panel.classList.add('animate-in'));
  document.getElementById('btn-close-debrief').onclick = () => {
    modal.querySelector('.modal-title').textContent = 'MISSION DEBRIEF';
    modal.classList.remove('open');
  };
}

// ── New Mission Form ─────────────────────────────────────────────────

function initMissionForm() {
  const modal = document.getElementById('modal-new-mission');
  const form = document.getElementById('form-new-mission');
  const durInput = document.getElementById('input-duration');
  const typeInput = document.getElementById('input-type');
  const typeBtns = document.querySelectorAll('.type-btn');
  const startInput = document.getElementById('input-start');
  const endInput = document.getElementById('input-end');
  const scheduleHint = document.getElementById('schedule-hint');
  const durationLabel = document.getElementById('duration-label');

  function updateScheduleHint() {
    const startVal = startInput.value;
    const endVal = endInput.value;
    if (endVal) {
      const startDate = startVal ? new Date(startVal) : new Date();
      const endDate = new Date(endVal);
      const diffMin = Math.round((endDate - startDate) / 60000);
      if (diffMin <= 0) {
        scheduleHint.textContent = 'End must be after start.';
        scheduleHint.className = 'schedule-hint error';
      } else {
        const label = formatDurationLabel(diffMin);
        const prefix = startVal && new Date(startVal) > new Date() ? 'Scheduled · ' : '';
        scheduleHint.textContent = `${prefix}Duration: ${label}`;
        scheduleHint.className = 'schedule-hint ok';
      }
      durationLabel.style.opacity = '0.4';
      durationLabel.style.pointerEvents = 'none';
    } else if (startVal && new Date(startVal) > new Date()) {
      scheduleHint.textContent = 'Will be scheduled — starts at selected time.';
      scheduleHint.className = 'schedule-hint ok';
      durationLabel.style.opacity = '';
      durationLabel.style.pointerEvents = '';
    } else {
      scheduleHint.textContent = '';
      scheduleHint.className = 'schedule-hint';
      durationLabel.style.opacity = '';
      durationLabel.style.pointerEvents = '';
    }
  }

  startInput.addEventListener('input', updateScheduleHint);
  endInput.addEventListener('input', updateScheduleHint);

  // Type toggle
  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      typeInput.value = btn.dataset.type;
      const isResistance = btn.dataset.type === 'resistance';
      modal.querySelector('.modal-title').textContent = isResistance ? 'HOLD DIRECTIVE' : 'MISSION BRIEFING';
      form.querySelector('.btn-primary').textContent = isResistance ? 'ACTIVATE' : 'DEPLOY';
    });
  });

  document.getElementById('btn-new-mission').addEventListener('click', () => {
    modal.classList.add('open');
    document.getElementById('input-title').focus();
  });

  document.getElementById('btn-cancel-mission').addEventListener('click', () => {
    modal.classList.remove('open');
    form.reset();
    durInput.value = '2h';
    resetFormMode();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      form.reset();
      durInput.value = '2h';
      resetFormMode();
    }
  });

  document.querySelectorAll('.dur-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      durInput.value = btn.dataset.val;
      durInput.focus();
    });
  });

  durInput.addEventListener('input', () => durInput.setCustomValidity(''));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const startVal = startInput.value;
    const endVal = endInput.value;

    let duration_minutes;
    let scheduled_start = null;

    if (endVal) {
      const startDate = startVal ? new Date(startVal) : new Date();
      const endDate = new Date(endVal);
      duration_minutes = Math.round((endDate - startDate) / 60000);
      if (duration_minutes < 1) {
        endInput.setCustomValidity('End must be after start.');
        endInput.reportValidity();
        return;
      }
      endInput.setCustomValidity('');
      if (startVal) scheduled_start = new Date(startVal).toISOString().slice(0, 19);
    } else {
      duration_minutes = parseDuration(durInput.value);
      if (duration_minutes < 1) {
        durInput.setCustomValidity('Enter a valid duration, e.g. 2h 30m, 45m, 1m');
        durInput.reportValidity();
        return;
      }
      durInput.setCustomValidity('');
      if (startVal) scheduled_start = new Date(startVal).toISOString().slice(0, 19);
    }

    const data = {
      title: document.getElementById('input-title').value.trim(),
      description: document.getElementById('input-desc').value.trim(),
      priority: parseInt(document.getElementById('input-priority').value),
      category: document.getElementById('input-category').value,
      duration_minutes,
      territory_id: document.getElementById('input-territory').value || null,
      type: typeInput.value || 'mission',
      scheduled_start,
    };
    if (!data.title) return;

    if (editingTaskId) {
      await api(`/tasks/${editingTaskId}`, { method: 'PATCH', body: data });
    } else {
      await api('/tasks', { method: 'POST', body: data });
    }
    modal.classList.remove('open');
    form.reset();
    durInput.value = '2h';
    resetFormMode();
    refresh();
  });

  document.getElementById('modal-debrief').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      document.getElementById('modal-debrief').classList.remove('open');
    }
  });
}

function resetFormMode() {
  editingTaskId = null;
  const typeBtns = document.querySelectorAll('.type-btn');
  typeBtns.forEach(b => b.classList.remove('active'));
  document.querySelector('.type-btn[data-type="mission"]').classList.add('active');
  document.getElementById('input-type').value = 'mission';
  document.getElementById('input-start').value = '';
  document.getElementById('input-end').value = '';
  document.getElementById('schedule-hint').textContent = '';
  document.getElementById('schedule-hint').className = 'schedule-hint';
  document.getElementById('duration-label').style.opacity = '';
  document.getElementById('duration-label').style.pointerEvents = '';
  document.querySelector('#modal-new-mission .modal-title').textContent = 'MISSION BRIEFING';
  document.querySelector('#form-new-mission .btn-primary').textContent = 'DEPLOY';
}

// ── Shop ─────────────────────────────────────────────────────────────

function initShop() {
  document.querySelectorAll('.shop-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const item = btn.dataset.item;
      const result = await api(`/game/shop/${item}`, { method: 'POST' });
      if (result.error) {
        toast(result.error, 'error');
        return;
      }
      toast(result.message, 'success');
      refresh();
    });
  });
}

// ── Map ──────────────────────────────────────────────────────────────

// Territory adjacency (client-side mirror for highlighting)
const TERRITORIES_DEF = [
  { id: 'north-america',  adj: ['south-america', 'europe'] },
  { id: 'south-america',  adj: ['north-america', 'africa'] },
  { id: 'europe',         adj: ['north-america', 'africa', 'russia'] },
  { id: 'russia',         adj: ['europe', 'central-asia', 'east-asia'] },
  { id: 'africa',         adj: ['south-america', 'europe', 'middle-east'] },
  { id: 'middle-east',    adj: ['africa', 'central-asia', 'south-asia'] },
  { id: 'central-asia',   adj: ['russia', 'middle-east', 'south-asia', 'east-asia'] },
  { id: 'south-asia',     adj: ['middle-east', 'central-asia', 'southeast-asia'] },
  { id: 'east-asia',      adj: ['russia', 'central-asia', 'southeast-asia', 'oceania'] },
  { id: 'southeast-asia', adj: ['south-asia', 'east-asia', 'oceania'] },
  { id: 'oceania',        adj: ['east-asia', 'southeast-asia'] },
  { id: 'antarctica',     adj: [] },
];

// Country code → territory mapping
const COUNTRY_TERRITORY = {};
const TER_COUNTRIES = {
  'north-america': ['US','CA','MX','GT','HN','SV','NI','CR','PA','BZ','CU','JM','HT','DO','PR','BS','TT','BB','AG','DM','LC','VC','KN','GD','AI','AW','BM','KY','TC','VG','VI','BQ','CW','SX','BL','MF','PM','GL','GP','MQ'],
  'south-america': ['BR','AR','CL','CO','PE','VE','EC','BO','PY','UY','GY','SR','GF','FK'],
  'europe': ['GB','FR','DE','IT','ES','PT','NL','BE','CH','AT','PL','CZ','SK','HU','RO','BG','GR','HR','RS','BA','ME','MK','AL','SI','IE','DK','NO','SE','FI','IS','LT','LV','EE','LU','MT','CY','MD','UA','BY','AD','MC','SM','VA','LI','GI','FO','AX','GG','JE','IM','SJ','XK','GE','AM','AZ','TR'],
  'russia': ['RU'],
  'africa': ['ZA','EG','NG','KE','ET','TZ','DZ','MA','GH','CI','CM','AO','MZ','MG','TN','LY','SD','SS','TD','NE','ML','BF','SN','GN','SL','LR','GA','CG','CD','UG','RW','BI','ER','DJ','SO','ZW','ZM','MW','BW','NA','SZ','LS','MR','CF','GQ','TG','BJ','GM','GW','ST','CV','SC','KM','MU','RE','YT','SH','EH'],
  'middle-east': ['SA','IQ','IR','SY','JO','LB','IL','PS','YE','OM','AE','KW','QA','BH'],
  'central-asia': ['KZ','UZ','TM','KG','TJ','AF','MN'],
  'south-asia': ['IN','PK','BD','LK','NP','BT','MM','MV'],
  'east-asia': ['CN','JP','KR','KP','TW','HK','MO'],
  'southeast-asia': ['TH','VN','MY','ID','PH','SG','LA','KH','BN','TL','MM'],
  'oceania': ['AU','NZ','PG','FJ','SB','VU','NC','WS','TO','TV','NR','KI','FM','MH','PW','PF','CK','NU','TK','NF','GU','AS','MP','CC','CX','HM'],
  'antarctica': ['AQ','TF','BV','GS'],
};
for (const [ter, codes] of Object.entries(TER_COUNTRIES)) {
  for (const code of codes) COUNTRY_TERRITORY[code] = ter;
}

let selectedTerritory = null;
let mapSvgLoaded = false;
let prevTerritoryStates = {};

async function updateMap() {
  const territories = await api('/game/territories');
  const container = document.getElementById('map-container');

  // Load SVG once
  if (!mapSvgLoaded) {
    const res = await fetch('/assets/world.svg');
    const svgText = await res.text();
    container.innerHTML = svgText;
    const svg = container.querySelector('svg');
    // Make SVG responsive — add viewBox from original dimensions, then override size
    const origW = svg.getAttribute('width') || 1009.67;
    const origH = svg.getAttribute('height') || 665.96;
    svg.setAttribute('viewBox', `0 0 ${parseFloat(origW)} ${parseFloat(origH)}`);
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    svg.style.width = '100%';
    svg.style.height = 'auto';
    svg.style.display = 'block';

    // Add click handlers to all country paths
    svg.querySelectorAll('path[id]').forEach(path => {
      const terId = COUNTRY_TERRITORY[path.id];
      if (terId) {
        path.style.cursor = 'pointer';
        path.addEventListener('click', () => selectTerritory(terId));
      }
    });
    // Add territory name labels
    addMapLabels(svg);
    mapSvgLoaded = true;
  }

  // Color all paths by territory status
  const svg = container.querySelector('svg');
  if (!svg) return;

  const colors = {
    xcom:      { fill: '#1a4a6e', stroke: '#26a6de' },
    fortified: { fill: '#1a5a5a', stroke: '#4aeadc' },
    contested_alien:  { fill: '#4a3a10', stroke: '#e8c840' },
    contested_player: { fill: '#1a3a4a', stroke: '#40c8e8' },
    alien:     { fill: '#4a1418', stroke: '#d63040' },
    hidden:    { fill: '#0a0e14', stroke: '#1a2535' },
  };
  const defaultColor = { fill: '#0c1119', stroke: '#1a2535' };

  // Find adjacent territory IDs for the selected territory
  const selectedDef = TERRITORIES_DEF.find(t => t.id === selectedTerritory);
  const adjacentIds = selectedDef ? new Set(selectedDef.adj) : new Set();

  // Build set of at-risk territories (UN/fortified adjacent to alien)
  const alienIds = new Set(territories.filter(t => t.status === 'alien').map(t => t.id));
  const atRiskIds = new Set();
  for (const aDef of TERRITORIES_DEF) {
    if (alienIds.has(aDef.id)) {
      for (const adjId of aDef.adj) {
        const adjTer = territories.find(t => t.id === adjId);
        if (adjTer && (adjTer.status === 'xcom' || adjTer.status === 'fortified')) {
          atRiskIds.add(adjId);
        }
      }
    }
  }

  svg.querySelectorAll('path[id]').forEach(path => {
    const terId = COUNTRY_TERRITORY[path.id];
    const ter = terId ? territories.find(t => t.id === terId) : null;
    let c = defaultColor;
    if (ter) {
      if (ter.hidden) c = colors.hidden;
      else if (ter.status === 'contested') c = ter.contested_by === 'player' ? colors.contested_player : colors.contested_alien;
      else c = colors[ter.status] || defaultColor;
    }
    path.style.fill = c.fill;
    path.style.stroke = c.stroke;
    path.style.strokeWidth = '0.3';
    path.style.transition = 'fill 0.4s, stroke 0.4s';

    // Pulse contested (alien attack)
    path.classList.remove('contested-pulse', 'at-risk-glow');
    if (ter && ter.status === 'contested' && ter.contested_by === 'alien' && !ter.hidden) {
      path.classList.add('contested-pulse');
    }

    // At-risk glow (UN territory adjacent to alien)
    if (ter && atRiskIds.has(terId) && !ter.hidden) {
      path.classList.add('at-risk-glow');
    }

    // Highlight selected territory
    if (terId === selectedTerritory) {
      path.style.stroke = '#f0f4f8';
      path.style.strokeWidth = '1.2';
    }
    // Highlight adjacent territories
    else if (adjacentIds.has(terId)) {
      path.style.stroke = '#8090a0';
      path.style.strokeWidth = '0.6';
    }
  });

  // Update detail panel
  if (selectedTerritory) {
    const ter = territories.find(t => t.id === selectedTerritory);
    if (ter && !ter.hidden) showTerritoryDetail(ter);
    else document.getElementById('territory-detail').innerHTML = '';
  }

  // Territory change toasts
  const TER_NAMES = {};
  for (const t of territories) TER_NAMES[t.id] = t.name;
  for (const t of territories) {
    const prev = prevTerritoryStates[t.id];
    if (prev && prev !== t.status && !t.hidden) {
      if (t.status === 'contested' && t.contested_by === 'alien') {
        toast(`${t.name} under attack!`, 'error');
      } else if (t.status === 'alien' && prev === 'contested') {
        toast(`${t.name} LOST to aliens!`, 'error');
      } else if (t.status === 'xcom' && prev === 'contested') {
        toast(`${t.name} secured!`, 'success');
      } else if (t.status === 'xcom' && prev === 'fortified') {
        toast(`${t.name} fortifications breached!`, 'error');
      }
    }
    prevTerritoryStates[t.id] = t.status;
  }

  updateTerritoryDropdown(territories);
}

function selectTerritory(id) {
  selectedTerritory = id;
  updateMap();
}

function showTerritoryDetail(ter) {
  const el = document.getElementById('territory-detail');
  const shortNames = { 'north-america': 'N.America', 'south-america': 'S.America', 'east-asia': 'E.Asia',
    'southeast-asia': 'SE.Asia', 'south-asia': 'S.Asia', 'central-asia': 'C.Asia',
    'middle-east': 'Mid.East', europe: 'Europe', russia: 'Russia', africa: 'Africa',
    oceania: 'Oceania', antarctica: 'Antarctica' };
  const adj = ter.adj.map(a => shortNames[a] || a).join(', ');

  let lines = [];
  lines.push(`Adjacent: ${adj || 'None (isolated)'}`);

  if (ter.status === 'xcom') lines.push('UN controlled. +2% credit income.');
  if (ter.status === 'fortified') lines.push('UN fortified. +2% income. Absorbs one alien attack.');
  if (ter.status === 'alien') lines.push('Alien controlled \u2014 assign missions here to liberate.');

  if (ter.status === 'contested' && ter.contested_by === 'alien') {
    let urgency = 'UNDER ALIEN ATTACK \u2014 deploy missions to defend!';
    if (ter.contested_remaining != null) {
      const h = Math.floor(ter.contested_remaining / 3600);
      const m = Math.floor((ter.contested_remaining % 3600) / 60);
      urgency += ` Falls in ${h}h ${m}m.`;
    }
    lines.push(urgency);
  }
  if (ter.status === 'contested' && ter.contested_by === 'player') {
    lines.push('UN ASSAULT IN PROGRESS \u2014 one more mission to liberate!');
  }

  if (ter.active_missions > 0) {
    lines.push(`${ter.active_missions} active mission${ter.active_missions > 1 ? 's' : ''} deployed here.`);
  }

  let actions = '';
  if (ter.status === 'xcom') {
    actions = `<button class="btn-primary" onclick="fortifyTerritory('${ter.id}')">FORTIFY (200 CR)</button>`;
  }

  el.innerHTML = `
    <div class="ter-panel">
      <div class="ter-panel-header">
        <span class="ter-panel-name">${ter.name}</span>
        <span class="ter-panel-status ${ter.status}">${ter.status === 'xcom' ? 'UN' : ter.status.toUpperCase()}</span>
      </div>
      <div class="ter-panel-info">${lines.join('<br>')}</div>
      ${actions ? `<div class="ter-panel-actions">${actions}</div>` : ''}
    </div>`;
}

async function fortifyTerritory(id) {
  const ok = await showConfirm(
    'FORTIFY TERRITORY',
    'Establish fortified defenses?<div class="confirm-warn">Cost: 200 CR. Absorbs one alien attack. Max 3 fortified.</div>',
    'FORTIFY'
  );
  if (!ok) return;
  const result = await api(`/game/territories/${id}/fortify`, { method: 'POST' });
  if (result.error) { toast(result.error, 'error'); return; }
  toast(result.message, 'success');
  refresh();
}

function updateTerritoryDropdown(territories) {
  const select = document.getElementById('input-territory');
  if (!select) return;
  const current = select.value;

  const statusLabel = { xcom: '\u25CF UN', fortified: '\u25C6 Fortified', contested: '\u26A0 CONTESTED', alien: '\u2717 ALIEN' };
  const statusColor = { xcom: '#26a6de', fortified: '#4aeadc', contested: '#e8c840', alien: '#d63040' };

  select.innerHTML = '<option value="">— No territory —</option>' +
    territories
      .filter(t => !t.hidden)
      .map(t => {
        const label = statusLabel[t.status] || t.status;
        const missions = t.active_missions > 0 ? ` (${t.active_missions} deployed)` : '';
        return `<option value="${t.id}" style="color:${statusColor[t.status] || '#9aabb8'}">${t.name} — ${label}${missions}</option>`;
      }).join('');
  select.value = current;
}

function addMapLabels(svg) {
  // Hardcoded label positions in SVG coordinate space (viewBox: 0 0 1010 666)
  const labels = [
    { id: 'north-america',  x: 185, y: 250, name: 'N. America' },
    { id: 'south-america',  x: 300, y: 460, name: 'S. America' },
    { id: 'europe',         x: 510, y: 220, name: 'Europe' },
    { id: 'russia',         x: 720, y: 170, name: 'Russia' },
    { id: 'africa',         x: 530, y: 420, name: 'Africa' },
    { id: 'middle-east',    x: 620, y: 340, name: 'Mid. East' },
    { id: 'central-asia',   x: 700, y: 270, name: 'C. Asia' },
    { id: 'south-asia',     x: 730, y: 370, name: 'S. Asia' },
    { id: 'east-asia',      x: 820, y: 270, name: 'E. Asia' },
    { id: 'southeast-asia', x: 830, y: 400, name: 'SE. Asia' },
    { id: 'oceania',        x: 900, y: 510, name: 'Oceania' },
    { id: 'antarctica',     x: 505, y: 630, name: 'Antarctica' },
  ];

  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('id', 'territory-labels');

  for (const l of labels) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', l.x);
    text.setAttribute('y', l.y);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'central');
    text.setAttribute('class', 'map-label');
    text.setAttribute('data-territory', l.id);
    text.textContent = l.name;
    text.style.pointerEvents = 'none';
    g.appendChild(text);
  }

  svg.appendChild(g);
}

// ── Base ─────────────────────────────────────────────────────────────

const ROOM_ICONS = {
  command: '\u2605', barracks: '\u2302', lab: '\u2622', workshop: '\u2692',
  hangar: '\u2708', medbay: '\u271A', defense: '\u25C6', comms: '\u25CE', vault: '\u25A3'
};

async function updateBase() {
  const rooms = await api('/game/base');
  const el = document.getElementById('base-grid');

  // Build a 3x3 grid ordered by row,col
  const grid = Array(9).fill(null);
  for (const r of rooms) {
    grid[r.row * 3 + r.col] = r;
  }

  el.innerHTML = grid.map((room, i) => {
    if (!room) return `<div class="base-cell empty"></div>`;
    const icon = ROOM_ICONS[room.id] || '\u25A1';
    const builtClass = room.built ? 'built' : '';
    const lockedClass = room.locked ? 'locked-dep' : '';
    let costLabel;
    if (room.built) costLabel = 'ONLINE';
    else if (room.locked) costLabel = `Requires ${room.requires_name}`;
    else costLabel = `${room.cost} CR`;

    const lockInfo = room.locked && !room.built
      ? `<div class="base-cell-lock">\u26BF ${room.requires_name}</div>` : '';

    return `
      <div class="base-cell ${builtClass} ${lockedClass} ${room.id}" onclick="buildRoom('${room.id}')" title="${room.desc}">
        <div class="base-cell-icon">${icon}</div>
        <div class="base-cell-name">${room.name}</div>
        <div class="base-cell-cost">${costLabel}</div>
        ${lockInfo}
        <div class="base-cell-desc">${room.desc}</div>
      </div>`;
  }).join('');
}

async function buildRoom(roomId) {
  const rooms = await api('/game/base');
  const room = rooms.find(r => r.id === roomId);
  if (!room || room.built) return;

  const ok = await showConfirm(
    'BUILD FACILITY',
    `Construct <strong>${room.name}</strong>?<div class="confirm-warn">${room.desc}</div>`,
    `BUILD (${room.cost} CR)`
  );
  if (!ok) return;

  const result = await api(`/game/base/${roomId}`, { method: 'POST' });
  if (result.error) { toast(result.error, 'error'); return; }
  toast(result.message, 'success');
  refresh();
}

// ── Research ─────────────────────────────────────────────────────────

async function updateResearch() {
  const techs = await api('/game/research');
  const base = await api('/game/base');
  const hasLab = base.some(r => r.id === 'lab' && r.built);

  const reqEl = document.getElementById('research-req');
  if (!hasLab) {
    reqEl.className = 'research-req locked';
    reqEl.textContent = 'Research Lab required. Build it in the BASE tab to unlock the tech tree.';
  } else {
    reqEl.className = 'research-req';
    reqEl.textContent = `Research Lab online. Streak: ${gameState.streak_days}d — or complete enough total missions to unlock via field experience.`;
  }

  const el = document.getElementById('research-tree');

  el.innerHTML = techs.map((tech, i) => {
    let stateClass, badge;
    if (tech.unlocked) {
      stateClass = 'unlocked';
      badge = '<span class="research-badge done">COMPLETE</span>';
    } else if (tech.available && hasLab) {
      stateClass = 'available';
      badge = '<span class="research-badge ready">READY</span>';
    } else {
      stateClass = 'locked';
      badge = '';
    }

    const connector = i > 0
      ? `<div class="research-connector ${tech.unlocked || (techs[i-1] && techs[i-1].unlocked) ? 'active' : ''}"></div>`
      : '';

    return `
      ${connector}
      <div class="research-node ${stateClass}">
        <div class="research-streak">${tech.streak}d<span class="research-or">or</span>${tech.missions}m</div>
        <div class="research-info">
          <div class="research-name">${tech.name}</div>
          <div class="research-desc">${tech.desc}</div>
        </div>
        ${badge}
      </div>`;
  }).join('');
}

// ── Soldiers ─────────────────────────────────────────────────────────

const SOLDIER_RANKS = ['Rookie', 'Squaddie', 'Corporal', 'Sergeant', 'Lieutenant', 'Captain', 'Major'];
const SOLDIER_RANK_BONUS = [0, 0, 1, 2, 3, 4, 5];

async function updateSoldiers() {
  const soldiers = await api('/game/soldiers');
  const el = document.getElementById('soldier-list');
  const memEl = document.getElementById('memorial-section');

  const active = soldiers.filter(s => s.status === 'active' || s.status === 'wounded');
  const fallen = soldiers.filter(s => s.status === 'kia');

  if (!active.length) {
    el.innerHTML = '<div class="empty-state">No soldiers. Recruit from HQ.</div>';
  } else {
    el.innerHTML = active.map(s => {
      const sprite = `xcom${s.id % 3}`;
      const rankName = SOLDIER_RANKS[s.rank_level] || 'Rookie';
      const statusClass = s.status !== 'active' ? s.status : '';
      const daysServed = Math.floor((Date.now() - new Date(s.created_at + 'Z').getTime()) / 86400000);
      const bonus = SOLDIER_RANK_BONUS[s.rank_level] || 0;

      let statusBadge = '';
      if (s.status === 'wounded') statusBadge = '<span class="soldier-status wounded">WOUNDED</span>';

      return `
        <div class="soldier-card ${statusClass}">
          <img class="soldier-sprite" src="assets/sprites/${sprite}.png" alt="">
          <div class="soldier-info">
            <div class="soldier-name">
              ${esc(s.name)}
              ${s.nickname ? `<span class="soldier-nickname">"${esc(s.nickname)}"</span>` : ''}
            </div>
            <div class="soldier-meta">
              <span class="soldier-rank">${rankName}</span>
              \u00B7 ${s.missions} missions \u00B7 ${daysServed}d served
              ${bonus > 0 ? `\u00B7 +${bonus}% CR` : ''}
              ${statusBadge}
            </div>
          </div>
        </div>`;
    }).join('');
  }

  // KIA Memorial
  if (fallen.length) {
    memEl.innerHTML = `<div class="memorial-header">\u2020 MEMORIAL WALL \u2014 ${fallen.length} FALLEN</div>` +
      fallen.map(s => {
        const daysServed = Math.floor((Date.now() - new Date(s.created_at + 'Z').getTime()) / 86400000);
        const rankName = SOLDIER_RANKS[s.rank_level] || 'Rookie';
        return `
          <div class="memorial-card">
            <div class="memorial-name">
              ${esc(s.name)}
              ${s.nickname ? `<span class="memorial-nickname">"${esc(s.nickname)}"</span>` : ''}
            </div>
            <div class="memorial-record">${rankName} \u00B7 ${s.missions} missions \u00B7 ${daysServed} days of service</div>
          </div>`;
      }).join('');
  } else {
    memEl.innerHTML = '';
  }
}

// ── Story Tab ────────────────────────────────────────────────────────

let storyDetailSoldierId = null;
let _profileCache = null; // cached for readChapter to avoid re-fetch

function markStoryRead(totalUnlocked) {
  localStorage.setItem('story_seen_count', totalUnlocked);
  document.querySelector('[data-tab="story"]')?.classList.remove('has-badge');
}

function checkStoryBadge(progress) {
  const total = progress.reduce((sum, s) => sum + (s.unlocked || 0), 0);
  const seen = parseInt(localStorage.getItem('story_seen_count') || '0', 10);
  const btn = document.querySelector('[data-tab="story"]');
  if (btn) btn.classList.toggle('has-badge', total > seen);
}

async function updateStory() {
  if (storyDetailSoldierId) {
    await renderSoldierProfile(storyDetailSoldierId);
    return;
  }

  const progress = await api('/game/story/progress');
  checkStoryBadge(progress);
  const overview = document.getElementById('story-overview');
  const detail = document.getElementById('story-detail');
  detail.innerHTML = '';

  if (!progress.length) {
    overview.innerHTML = '<div class="empty-state">No personnel files. Characters are assigned to soldiers when recruited.</div>';
  } else {
    overview.innerHTML = progress.map(s => {
      const pct = Math.round(s.progress * 100);
      const kia = s.status === 'kia' ? 'kia' : '';
      return `
        <div class="story-card ${kia}" onclick="openSoldierProfile(${s.soldier_id})">
          <img class="soldier-sprite" src="assets/sprites/xcom${s.soldier_id % 3}.png" alt="">
          <div class="story-card-info">
            <div class="story-card-name">
              ${esc(s.name)}
              ${s.nickname ? `<span class="story-card-nickname">"${esc(s.nickname)}"</span>` : ''}
            </div>
            <div class="story-card-meta">${s.unlocked}/${s.total} chapters${s.lost > 0 ? ` \u00B7 ${s.lost} lost` : ''}</div>
          </div>
          <div class="story-card-progress">
            <div class="story-card-pct">${pct}%</div>
            <div class="story-card-bar"><div class="story-card-bar-fill" style="width:${pct}%"></div></div>
          </div>
        </div>`;
    }).join('');

    // Mark all as read when overview is shown
    const total = progress.reduce((sum, s) => sum + (s.unlocked || 0), 0);
    markStoryRead(total);
  }

}

function openSoldierProfile(id) {
  storyDetailSoldierId = id;
  updateStory();
}

function closeProfile() {
  storyDetailSoldierId = null;
  _profileCache = null;
  document.getElementById('story-detail').innerHTML = '';
  updateStory();
}

async function renderSoldierProfile(soldierId) {
  const profile = await api(`/game/soldier/${soldierId}/profile`);
  if (!profile || profile.error) { closeProfile(); return; }
  _profileCache = profile;

  const overview = document.getElementById('story-overview');
  const detail = document.getElementById('story-detail');
  overview.innerHTML = '';

  const sprite = `xcom${profile.id % 3}`;
  const daysServed = Math.floor((Date.now() - new Date(profile.created_at + 'Z').getTime()) / 86400000);
  const traits = (profile.traits || []).map(t => `<span class="trait-tag">${t}</span>`).join('');
  const rankName = SOLDIER_RANKS[profile.rank_level] || 'Rookie';

  let html = `
    <button class="profile-back" onclick="closeProfile()">\u2190 BACK TO ROSTER</button>
    <div class="profile-header">
      <img class="profile-sprite" src="assets/sprites/${sprite}.png" alt="">
      <div class="profile-info">
        <div class="profile-name">
          ${esc(profile.name)}
          ${profile.nickname ? `<span class="profile-nickname">"${esc(profile.nickname)}"</span>` : ''}
        </div>
        <div class="profile-meta">
          ${rankName} \u00B7 ${profile.missions} missions \u00B7 ${daysServed}d served
          ${profile.status === 'kia' ? ' \u00B7 K.I.A.' : profile.status === 'wounded' ? ' \u00B7 WOUNDED' : ''}
        </div>
        ${profile.personality_desc ? `<div class="profile-meta">${esc(profile.personality_desc)}</div>` : ''}
        <div class="profile-traits">${traits}</div>
      </div>
    </div>
  `;

  // Relationships
  if (profile.relationships.length) {
    html += '<div class="profile-section-title">CONNECTIONS</div>';
    html += profile.relationships.map(r => {
      const typeClass = r.rel_type === 'tension' ? 'tension' : r.rel_type === 'rivals' ? 'rivals' : '';
      const nameClass = r.status === 'kia' ? 'kia' : '';
      return `
        <div class="rel-card">
          <span class="rel-type ${typeClass}">${r.rel_type.replace('_', '/')}</span>
          <span class="rel-name ${nameClass}">${esc(r.name)}</span>
          <span class="rel-desc">${esc(r.description)}</span>
        </div>`;
    }).join('');
  }

  // Chapters
  html += `<div class="profile-section-title">STORY \u2014 ${profile.progress}/${profile.total_chapters} CHAPTERS</div>`;
  html += '<div id="chapter-list">';

  const tierLabels = { surface: 'Surface', roots: 'Roots', cracks: 'Cracks', secrets: 'Secrets', legacy: 'Legacy' };
  let currentTier = '';

  for (const ch of profile.chapters) {
    if (ch.tier !== currentTier) {
      currentTier = ch.tier;
      html += `<div style="color:var(--text-dim);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin:0.6rem 0 0.3rem;padding-top:0.4rem;border-top:1px solid var(--border);">${tierLabels[ch.tier] || ch.tier}</div>`;
    }
    const stateClass = ch.state;
    const clickHandler = ch.state === 'unlocked' ? `onclick="readChapter(${profile.id}, ${ch.id})"` : '';
    const achieveIcon = ch.is_achievement ? '<span class="chapter-achievement">\u2605</span>' : '';
    const lostLabel = ch.state === 'lost' ? ' [LOST]' : '';
    const hintEl = ch.state === 'locked' && ch.unlock_hint
      ? `<span class="chapter-hint">${esc(ch.unlock_hint)}</span>` : '';
    html += `
      <div class="chapter-item ${stateClass}" ${clickHandler}>
        <span class="chapter-num">#${ch.num}</span>
        <span class="chapter-title">${esc(ch.title)}${lostLabel}</span>
        ${achieveIcon}${hintEl}
      </div>`;
  }
  html += '</div>';
  html += '<div id="chapter-reader"></div>';

  detail.innerHTML = html;
}

async function readChapter(soldierId, chapterId) {
  const profile = (_profileCache?.id === soldierId)
    ? _profileCache
    : await api(`/game/soldier/${soldierId}/profile`);
  const ch = profile.chapters.find(c => c.id === chapterId);
  if (!ch || ch.state !== 'unlocked') return;

  const reader = document.getElementById('chapter-reader');
  reader.innerHTML = `
    <div class="chapter-read">
      <div class="chapter-read-tier">${ch.tier}</div>
      <div class="chapter-read-title">#${ch.num} \u2014 ${esc(ch.title)}</div>
      <div class="chapter-read-content">${esc(ch.content)}</div>
      <button class="chapter-read-close" onclick="document.getElementById('chapter-reader').innerHTML=''">\u2715 CLOSE</button>
    </div>`;
  reader.scrollIntoView({ behavior: 'smooth' });
}

async function renderAchievements() {
  const data = await api('/game/achievements');
  const el = document.getElementById('achievement-gallery');

  if (!data.earned.length && !data.lost.length) {
    el.innerHTML = '<div class="empty-state">No achievements yet. Uncover soldier stories to earn them.</div>';
    return;
  }

  let html = '';
  for (const a of data.earned) {
    html += `
      <div class="achievement-item earned">
        <span class="achievement-icon">\u2605</span>
        <div>
          <div class="achievement-name">${esc(a.name)}</div>
          ${a.description ? `<div class="achievement-desc">${esc(a.description)}</div>` : ''}
          <div class="achievement-soldier">${esc(a.soldier_nickname || a.soldier_name)}</div>
        </div>
      </div>`;
  }
  for (const a of data.lost) {
    html += `
      <div class="achievement-item lost">
        <span class="achievement-icon">\u2020</span>
        <div>
          <div class="achievement-name">${esc(a.achievement_name || 'Unknown')}</div>
          <div class="achievement-soldier">${esc(a.soldier_nickname || a.soldier_name)} \u2014 lost forever</div>
        </div>
      </div>`;
  }
  el.innerHTML = html;
}

// ── Achievements Tab ─────────────────────────────────────────────────

async function updateAchievementsTab() {
  const gallery = await api('/game/achievements/gallery');
  const counterEl = document.getElementById('achievement-counter');
  const galleryEl = document.getElementById('achievement-full-gallery');

  const earnedCount = gallery.filter(a => a.state === 'earned').length;
  const lostCount = gallery.filter(a => a.state === 'lost').length;
  const total = gallery.length;

  counterEl.innerHTML =
    `<span class="ach-count-earned">${earnedCount} earned</span>` +
    `<span class="ach-count-sep">/</span>` +
    `<span class="ach-count-total">${total} total</span>` +
    (lostCount > 0 ? `<span class="ach-count-lost">${lostCount} lost forever</span>` : '');

  if (!gallery.length) {
    galleryEl.innerHTML = '<div class="empty-state">No achievements registered. Characters must be authored first.</div>';
    return;
  }

  // Group by character
  const grouped = {};
  for (const a of gallery) {
    if (!grouped[a.character]) grouped[a.character] = { name: a.character_name, callsign: a.character, items: [] };
    grouped[a.character].items.push(a);
  }

  galleryEl.innerHTML = Object.values(grouped).map(group => {
    const items = group.items.map(a => {
      const icon = a.state === 'earned' ? '\u2605' : a.state === 'lost' ? '\u2020' : '\u25CB';
      const tierLabel = a.state !== 'locked' ? `Ch.${a.chapter_num}` : '';
      return `
        <div class="achievement-item ${a.state}">
          <span class="achievement-icon">${icon}</span>
          <div class="achievement-body">
            <div class="achievement-name">${esc(a.name)}</div>
            ${a.desc ? `<div class="achievement-desc">${esc(a.desc)}</div>` : ''}
            ${tierLabel ? `<div class="achievement-soldier">${a.tier} \u00B7 ${tierLabel}</div>` : ''}
          </div>
        </div>`;
    }).join('');

    return `
      <div class="ach-group">
        <div class="ach-group-header">${esc(group.callsign)}</div>
        ${items}
      </div>`;
  }).join('');
}

// ── Event Log ────────────────────────────────────────────────────────

async function updateEventLog() {
  const events = await api('/game/events?limit=30');
  const el = document.getElementById('event-list');

  if (!events.length) {
    el.innerHTML = '<div class="empty-state">No events yet. Deploy your first mission!</div>';
    return;
  }

  el.innerHTML = events.map(e => {
    const icon = EVENT_ICONS[e.type] || '\u00B7';
    return `
      <div class="event-item">
        <div class="event-icon">${icon}</div>
        <div class="event-body">
          <div class="event-title">${esc(e.title)}</div>
          ${e.detail ? `<div class="event-detail">${esc(e.detail)}</div>` : ''}
        </div>
        <div class="event-time">${formatTime(e.created_at)}</div>
        <button class="btn-icon event-delete" onclick="deleteEvent(${e.id})" title="Delete">\u2717</button>
      </div>`;
  }).join('');
}

// ── Delete Event ─────────────────────────────────────────────────────

async function deleteEvent(id) {
  await api(`/game/events/${id}`, { method: 'DELETE' });
  updateEventLog();
}

// ── Keyboard ─────────────────────────────────────────────────────────

function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
      resetFormMode();
    }
  });
}

// ── Reactivate completed task ────────────────────────────────────────

async function reactivateMission(id) {
  const ok = await showConfirm(
    'REACTIVATE MISSION',
    'Set this mission back to active?<div class="confirm-warn">Credits and threat changes will be reversed. Any wounded or KIA soldier from this mission will be restored. Timer restarts from now.</div>',
    'REACTIVATE'
  );
  if (!ok) return;
  const result = await api(`/tasks/${id}/reactivate`, { method: 'POST' });
  if (result.error) { toast(result.error, 'error'); return; }
  let msg = `Mission reactivated. -${result.credits_reversed} CR, Threat +${result.invasion_increase}`;
  if (result.soldier_restored) msg += `. ${result.soldier_restored.nickname || result.soldier_restored.name} returned to duty.`;
  toast(msg, 'info');
  refresh();
}

// ── Toast ────────────────────────────────────────────────────────────

function toast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// ── Confirm Modal ────────────────────────────────────────────────────

function showConfirm(title, bodyHtml, okLabel = 'CONFIRM', danger = false) {
  return new Promise(resolve => {
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-body').innerHTML = bodyHtml;
    const okBtn = document.getElementById('confirm-ok');
    okBtn.textContent = okLabel;
    okBtn.classList.toggle('danger', danger);
    document.getElementById('modal-confirm').classList.add('open');

    function cleanup(result) {
      document.getElementById('modal-confirm').classList.remove('open');
      okBtn.removeEventListener('click', onOk);
      document.getElementById('confirm-cancel').removeEventListener('click', onCancel);
      document.getElementById('modal-confirm').removeEventListener('click', onBg);
      resolve(result);
    }
    function onOk() { cleanup(true); }
    function onCancel() { cleanup(false); }
    function onBg(e) { if (e.target === e.currentTarget) cleanup(false); }

    okBtn.addEventListener('click', onOk);
    document.getElementById('confirm-cancel').addEventListener('click', onCancel);
    document.getElementById('modal-confirm').addEventListener('click', onBg);
  });
}

// ── Helpers ──────────────────────────────────────────────────────────

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str || '';
  return d.innerHTML;
}

function formatTime(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'Z');
  const diff = Date.now() - d.getTime();
  if (diff < 60000) return 'now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h`;
  return d.toLocaleDateString('en', { month: 'short', day: 'numeric' });
}
