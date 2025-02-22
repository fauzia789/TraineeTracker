// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');
const applicantsRouter = require('./routes/applicants');

const app = express();
app.use(cors());
app.use(express.json());

// Use applicants router
app.use('/api/applicants', applicantsRouter);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});