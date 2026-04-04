/**
 * UNOPCOM Character Loader
 * Registers all character templates, chapters, relationships, and reactions.
 * Run: node db/characters/loader.js
 */

const narrative = require('../narrative');
const path = require('path');
const fs = require('fs');

// Clear existing templates for clean reload
const Database = require('better-sqlite3');
const db = new Database(path.join(__dirname, '..', 'unopcom.sqlite'));
db.exec(`
  DELETE FROM character_templates;
  DELETE FROM story_chapters;
  DELETE FROM character_relationships;
  DELETE FROM reaction_templates;
`);
db.close();

// Load all character files
const charDir = __dirname;
const files = fs.readdirSync(charDir).filter(f => f.startsWith('char-') && f.endsWith('.js'));

let totalChapters = 0;
let totalReactions = 0;
let totalRelationships = 0;

for (const file of files.sort()) {
  const charModule = require(path.join(charDir, file));
  const { template, chapters, reactions, relationships } = charModule;

  // Register template
  narrative.registerTemplate(template);
  console.log(`  ${template.callsign.padEnd(10)} (${template.name})`);

  // Register chapters
  for (const ch of chapters) {
    ch.character_id = template.id;
    narrative.registerChapter(ch);
    totalChapters++;
  }

  // Register reactions
  if (reactions) {
    for (const r of reactions) {
      r.character_id = r.character_id || template.id;
      narrative.registerReaction(r);
      totalReactions++;
    }
  }

  // Register relationships
  if (relationships) {
    for (const rel of relationships) {
      narrative.registerRelationship(rel);
      totalRelationships++;
    }
  }
}

console.log(`\nLoaded: ${files.length} characters, ${totalChapters} chapters, ${totalRelationships} relationships, ${totalReactions} reactions.`);
