const pool = require('../db');

// Obter todos os eventos
exports.getEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Criar um novo evento
exports.createEvent = async (req, res) => {
  const { title, description, imageUrl, date } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO events (title, description, imageUrl, date) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, imageUrl, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
