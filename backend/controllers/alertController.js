const pool = require('../db');

// Obter todos os alertas
exports.getAlerts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM alerts');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Criar um novo alerta
exports.createAlert = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO alerts (title, description, date) VALUES ($1, $2, $3) RETURNING *',
      [title, description, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
