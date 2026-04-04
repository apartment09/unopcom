# UNOPCOM — Claude Code Project Brief

## What it is
A personal productivity app skinned as an XCOM-style tactical game. Tasks are "missions." Complete them on time to earn credits and hold back an alien invasion meter. Fail or go overdue and soldiers get wounded/killed.

## Stack
- **Runtime:** Node.js + Express 5, no build step
- **DB:** SQLite via `better-sqlite3` (broken on Termux/Android — use `sqlite3` CLI for manual writes)
- **Frontend:** Vanilla JS SPA, single file `public/app.js` (~1500 lines), no framework
- **Port:** 3003
- **Start:** `node server.js`

## Key files
```
server.js                        — Express app, routes mounted here
routes/tasks.js                  — Task CRUD + complete/abandon/reactivate
routes/game.js                   — Game state, shop, base, research, territories, reset
db/database.js                   — All DB logic, game mechanics, constants
db/narrative.js                  — Story chapters, achievements, reactions, soldier templates
db/characters/char-01-ghost.js   — Character data (chapters, template) — char-01 to char-10
db/characters/loader.js          — Reloads template/chapter data into DB (run after editing char files)
public/index.html                — Single HTML shell
public/app.js                    — Entire frontend SPA
public/style.css                 — All styles
```

## Database tables
`tasks`, `game_state` (single row), `soldiers`, `events`, `base_rooms`, `research`, `territories`, `character_templates`, `story_chapters`, `unlocked_chapters`, `lost_chapters`, `achievements`, `character_relationships`, `reaction_templates`

**Note:** `story_chapters` is the correct table name (not `chapters`).

## Characters
10 authored characters × 50 story chapters each = 500 chapters. Chapters unlock by missions/rank/time/relationship/streak. Each character has a defining wound and arc written in Tim O'Brien's style (*The Things They Carried*).

Characters: Ghost (Ji-Yeon Kim), Ironside (Erik Hansen), Viper (Valentina Reyes), Spark (Kenji Nakamura), Raven (Adaeze Okafor), Frost (Alexei Petrov), Blaze (Lucas Santos), Razor (Lena Weber), Storm (Jean Dubois), Titan (Nils Johansson).

After editing any `db/characters/char-*.js` file, run `node db/characters/loader.js` to sync to DB.

## Game mechanics
- **Priority levels:** 1=Trivial, 2=Moderate, 3=Critical, 4=Terror
- **Overtime phases:** on_time → grace → overdue → critical
- **Soldier effects:** overdue=wound, critical=KIA (Titan Armor research downgrades to wound)
- **No soldiers available:** invasion meter spikes +10 (wound) or +20 (KIA) instead
- **Starting soldiers:** 1 (randomly assigned from available character templates)
- **Soldier restoration:** reactivating a completed task restores the soldier that was wounded/KIA during it (tracked via `tasks.soldier_id` + `tasks.soldier_prior_status`)

## API routes (key ones)
```
POST /tasks              — create task
POST /tasks/:id/complete — complete task (returns full debrief object)
POST /tasks/:id/reactivate — reverse a completion
POST /shop/:item         — recruit / heal / intel
POST /base/:roomId       — build room
POST /reset              — full campaign reset
GET  /soldier/:id/profile — narrative profile with chapters
```

## Known quirks
- `better-sqlite3` native module fails on Android/Termux. The running server works fine; you just can't `require('./db/database.js')` directly from a Node script outside the server process. Use `sqlite3 db/unopcom.sqlite` CLI for direct DB work.
- Vault bonus is applied as a second DB write after initial credits — appears at end of breakdown.
- `reaction_templates` with `character_id IS NULL` use `LIKE '%"trait"%'` JSON matching — fragile if traits contain special characters.
- `loader.js` deletes ALL template/chapter/relationship/reaction data before reloading. Safe as long as template IDs stay stable.
- Antarctica starts alien-controlled, no adjacencies — only liberatable by direct mission assignment. Requires Hyperwave Decoder research to appear on map.

## Termux/Android specifics
- All Bash tool calls need `dangerouslyDisableSandbox: true`
- Use `find`/`grep` via Bash instead of Glob/Grep tools (permissions issues)
- DB writes outside the server: generate SQL → write to `/tmp/x.sql` → `sqlite3 db/unopcom.sqlite < /tmp/x.sql`

## What doesn't exist yet
- No user auth / multi-user
- No push notifications for overdue tasks
- No sound
- No soldier equipment/inventory
- Research tree is linear (no branching)
- No UI to manually trigger `manual` unlock-type chapters
- Antarctica liberation has no dedicated UI callout
