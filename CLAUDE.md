# UNOPCOM — Claude Code Project Brief

## What it is
A personal productivity app skinned as an XCOM-style tactical game. Tasks are "missions." Complete them on time to earn credits and hold back an alien invasion meter. Fail or go overdue and soldiers get wounded/killed.

## Stack
- **Runtime:** Node.js + Express 5, no build step
- **DB:** SQLite via `better-sqlite3`
- **Frontend:** Vanilla JS SPA, single file `public/app.js` (~2000 lines), no framework
- **Port:** 3003
- **Start:** `node server.js`
- **GitHub:** https://github.com/apartment09/unopcom

## Key files
```
server.js                        — Express app, routes mounted here
routes/tasks.js                  — Task CRUD + complete/abandon/reactivate
routes/game.js                   — Game state, shop, base, research, territories, reset
db/database.js                   — All DB logic, game mechanics, constants (~1180 lines)
db/narrative.js                  — Story chapters, achievements, reactions, soldier templates
db/characters/char-01-ghost.js   — Character data (chapters, template) — char-01 to char-10
db/characters/loader.js          — Reloads template/chapter data into DB (run after editing char files)
public/index.html                — Single HTML shell
public/app.js                    — Entire frontend SPA
public/style.css                 — All styles (~2000 lines)
```

## Database tables
`tasks`, `subtasks`, `game_state` (single row), `soldiers`, `events`, `base_rooms`, `research`, `territories`, `character_templates`, `story_chapters`, `unlocked_chapters`, `lost_chapters`, `achievements`, `character_relationships`, `reaction_templates`

**Note:** `story_chapters` is the correct table name (not `chapters`). Column is `chapter_num` (not `chapter_number`).

## Characters
10 authored characters × 50 story chapters each = 500 chapters. Chapters unlock by missions/rank/time/relationship/streak/chance. Each character has a defining wound and arc written in Tim O'Brien's style (*The Things They Carried*).

Characters: Ghost (Ji-Yeon Kim), Ironside (Erik Hansen), Viper (Valentina Reyes), Spark (Kenji Nakamura), Raven (Adaeze Okafor), Frost (Alexei Petrov), Blaze (Lucas Santos), Razor (Lena Weber), Storm (Jean Dubois), Titan (Nils Johansson).

After editing any `db/characters/char-*.js` file, run `node db/characters/loader.js` to sync to DB.

## Game mechanics
- **Priority levels:** 1=Trivial, 2=Moderate, 3=Critical, 4=Terror
- **Overtime phases:** on_time → grace → overdue → critical
- **Soldier effects:** overdue=wound, critical=KIA (Titan Armor research downgrades to wound)
- **No soldiers available:** invasion meter spikes +10 (wound) or +20 (KIA) instead
- **Starting soldiers:** 1 (randomly assigned from available character templates)
- **Soldier restoration:** reactivating a completed task restores the soldier wounded/KIA during it (tracked via `tasks.soldier_id` + `tasks.soldier_prior_status`)
- **Research:** unlocks at streak threshold OR total missions completed (dual path — see RESEARCH_TREE in database.js)
- **Chapter streak unlocks:** also unlock via soldier.missions >= streak_threshold * 4

## Base rooms (9 total)
Command Center (free) → Barracks (150) → Lab (200) → Workshop (200) → Hangar (250) → Medical Bay (175) → Defense Matrix (300) → Comms Array (250) → Vault (350)

Medical Bay auto-heals wounded soldiers every 6h (2h with Adv. Medkit research).

## Research tree (streak OR missions to unlock)
Laser (3d/15m) → Alloys (5d/25m) → Plasma (7d/35m) → Adv. Medkit (10d/50m) → Titan Armor (14d/70m) → Psionics (21d/100m) → Hyperwave Decoder (30d/150m) → Fusion Defense (45d/225m)

## Subtasks
Tasks (both missions and directives) support subtasks. Missions call them **Objectives**; Hold Directives call them **Protocols**. The label is purely UI — same `subtasks` table underneath.

```
POST   /tasks/:id/subtasks          — add { title }
PATCH  /tasks/:id/subtasks/:sid     — toggle completed
DELETE /tasks/:id/subtasks/:sid     — remove
```

`getAllTasks` and `getTask` both include a `subtasks[]` array on every task response. Subtasks are toggled inline on the mission card (optimistic update). Adding/removing in the form is real-time for edits, batched-on-submit for new tasks.

## Scheduled tasks
Tasks can have a `scheduled_start` (ISO datetime, UTC). Status starts as `scheduled`; `promoteScheduledTasks()` in the tick promotes them to `active` when `datetime(scheduled_start) <= datetime('now')`. **Note:** must wrap `scheduled_start` in `datetime()` in SQL — stored with ISO `T` separator, SQLite `datetime('now')` uses space separator; plain string comparison fails.

## API routes (key ones)
```
POST   /tasks                       — create task
POST   /tasks/:id/complete          — complete task (returns full debrief object incl. reactions, story_unlocks)
POST   /tasks/:id/reactivate        — reverse a completion (restores wounded/KIA soldier)
POST   /tasks/:id/subtasks          — add subtask/objective/protocol
PATCH  /tasks/:id/subtasks/:sid     — toggle subtask complete
DELETE /tasks/:id/subtasks/:sid     — remove subtask
POST   /shop/:item                  — recruit / heal / intel / iron_will
POST   /base/:roomId                — build room
POST   /reset                       — full campaign reset
GET    /game/soldier/:id/profile    — narrative profile with chapters + unlock_hint for locked chapters
GET    /game/research               — research tree with available flag (streak OR missions)
```

## Debrief object shape (POST /tasks/:id/complete)
```js
{
  task, credits_earned, breakdown, on_time, overtime_phase, streak,
  invasion_reduction, rank_up, soldier_promoted, soldier_wounded,
  soldier_kia, near_miss, research_unlocked, territory, story_unlocks,
  reactions  // array of { name, text } — soldier quotes from the barracks
}
```

## Known quirks
- `reaction_templates` with `character_id IS NULL` use `LIKE '%"trait"%'` JSON matching — fragile if traits contain special characters.
- `loader.js` deletes ALL template/chapter/relationship/reaction data before reloading. Safe as long as template IDs stay stable.
- Antarctica starts alien-controlled, no adjacencies — only liberatable by direct mission assignment. Requires Hyperwave Decoder research to appear on map.
- Vault bonus is applied as a second DB write after initial credits — appears at end of breakdown.
- Chance-type chapter unlocks only roll every 5th soldier mission (rate-limited to prevent clustering).

## What doesn't exist yet
- No user auth / multi-user
- No sound
- No soldier equipment/inventory
- Research tree is linear (no branching)
- No UI to manually trigger `manual` unlock-type chapters
- Antarctica liberation has no dedicated UI callout
- No Web Push notifications (service worker + VAPID — deferred, requires HTTPS)
