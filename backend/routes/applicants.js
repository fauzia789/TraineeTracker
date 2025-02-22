// routes/applicants.js
const express = require('express');
const db = require('../db');
const router = express.Router();

// Get all applicants (with optional filters)
router.get('/', (req, res) => {
  const { name, status, date } = req.query;
  let query = 'SELECT * FROM applicants';
  const filters = [];
  if (name) filters.push(`name LIKE '%${name}%'`);
  if (status) filters.push(`status = '${status}'`);
  if (date) filters.push(`application_date = '${date}'`);
  if (filters.length > 0) query += ' WHERE ' + filters.join(' AND ');

  db.all(query, (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(rows);
  });
});

// Add a new applicant
router.post('/', (req, res) => {
  const { name, email, role, application_date, status } = req.body;
  const query = `INSERT INTO applicants (name, email, role, application_date, status) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [name, email, role, application_date, status], function(err) {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ id: this.lastID });
  });
});

// Delete an applicant
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM applicants WHERE id = ?', [id], function(err) {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ message: 'Applicant deleted' });
  });
});

module.exports = router;