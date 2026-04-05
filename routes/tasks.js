const { Router } = require('express');
const db = require('../db/database');
const router = Router();

router.get('/', (req, res) => {
  res.json(db.getAllTasks(req.query.status));
});

router.get('/:id', (req, res) => {
  const task = db.getTask(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

router.post('/', (req, res) => {
  const { title, description, priority, category, duration_minutes, territory_id, type, scheduled_start } = req.body;
  if (!title?.trim()) return res.status(400).json({ error: 'Title required' });
  if (!duration_minutes || duration_minutes < 1) return res.status(400).json({ error: 'Duration required' });
  const task = db.createTask({ title: title.trim(), description, priority, category, duration_minutes, territory_id, type, scheduled_start });
  res.status(201).json(task);
});

router.patch('/:id', (req, res) => {
  const task = db.updateTask(req.params.id, req.body);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

router.post('/:id/complete', (req, res) => {
  const task = db.getTask(req.params.id);
  if (task?.type === 'resistance') return res.status(400).json({ error: 'Hold Directives cannot be completed — use /breach to log a failure.' });
  const result = db.completeTask(req.params.id);
  if (!result) return res.status(400).json({ error: 'Task not active' });
  res.json(result);
});

router.post('/:id/breach', (req, res) => {
  const result = db.breachDirective(req.params.id);
  if (!result) return res.status(400).json({ error: 'Not a Hold Directive or not active' });
  res.json(result);
});

router.post('/:id/abandon', (req, res) => {
  const result = db.abandonTask(req.params.id);
  if (!result) return res.status(400).json({ error: 'Task not active' });
  res.json(result);
});

router.post('/:id/reactivate', (req, res) => {
  const result = db.reactivateTask(req.params.id);
  if (!result) return res.status(400).json({ error: 'Task not completed or abandoned' });
  res.json(result);
});

router.delete('/:id', (req, res) => {
  db.deleteTask(req.params.id);
  res.json({ ok: true });
});

// ── Subtasks ──────────────────────────────────────────────────────────

router.post('/:id/subtasks', (req, res) => {
  const { title } = req.body;
  if (!title?.trim()) return res.status(400).json({ error: 'Title required' });
  res.status(201).json(db.addSubtask(req.params.id, title));
});

router.patch('/:id/subtasks/:sid', (req, res) => {
  res.json(db.toggleSubtask(req.params.sid));
});

router.delete('/:id/subtasks/:sid', (req, res) => {
  db.deleteSubtask(req.params.sid);
  res.json({ ok: true });
});

module.exports = router;
