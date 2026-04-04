const express = require('express');
const path = require('path');
const db = require('./db/database');
const taskRoutes = require('./routes/tasks');
const gameRoutes = require('./routes/game');

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/tasks', taskRoutes);
app.use('/api/game', gameRoutes);

// SPA fallback
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Tick invasion meter on startup and every 10 minutes
db.tickInvasion();
setInterval(() => db.tickInvasion(), 10 * 60 * 1000);

app.listen(PORT, () => {
  console.log(`UNOPCOM running on port ${PORT}`);
});
