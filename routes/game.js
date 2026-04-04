const { Router } = require('express');
const db = require('../db/database');
const narrative = require('../db/narrative');
const router = Router();

router.get('/state', (req, res) => {
  res.json(db.getGameState());
});

router.get('/soldiers', (req, res) => {
  res.json(db.getSoldiers());
});

router.get('/events', (req, res) => {
  const limit = parseInt(req.query.limit) || 20;
  res.json(db.getEvents(limit));
});

router.delete('/events/:id', (req, res) => {
  db.deleteEvent(req.params.id);
  res.json({ ok: true });
});

router.get('/ranks', (req, res) => {
  res.json(db.RANKS);
});

router.get('/shop', (req, res) => {
  res.json(db.SHOP);
});

router.post('/shop/:item', (req, res) => {
  const result = db.shopBuy(req.params.item);
  if (result.error) return res.status(400).json(result);
  res.json(result);
});

// Base
router.get('/base', (req, res) => {
  res.json(db.getBase());
});

router.post('/base/:roomId', (req, res) => {
  const result = db.buildRoom(req.params.roomId);
  if (result.error) return res.status(400).json(result);
  res.json(result);
});

// Research
router.get('/research', (req, res) => {
  res.json(db.getResearch());
});

// Narrative
router.get('/soldier/:id/profile', (req, res) => {
  const profile = narrative.getSoldierProfile(parseInt(req.params.id));
  if (!profile) return res.status(404).json({ error: 'Soldier not found' });
  res.json(profile);
});

router.get('/story/progress', (req, res) => {
  res.json(narrative.getAllStoryProgress());
});

router.get('/achievements', (req, res) => {
  res.json(narrative.getAchievements());
});

router.get('/achievements/gallery', (req, res) => {
  res.json(narrative.getFullAchievementGallery());
});

// Territories
router.get('/territories', (req, res) => {
  res.json(db.getTerritories());
});

router.post('/territories/:id/fortify', (req, res) => {
  const result = db.fortifyTerritory(req.params.id);
  if (result.error) return res.status(400).json(result);
  res.json(result);
});

router.post('/reset', (req, res) => {
  res.json(db.resetCampaign());
});

module.exports = router;
