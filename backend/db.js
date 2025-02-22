// db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Create applicants table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS applicants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      role TEXT NOT NULL,
      application_date TEXT NOT NULL,
      status TEXT NOT NULL
    )
  `);
});

module.exports = db;