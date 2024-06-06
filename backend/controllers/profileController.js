const pool = require('../db');

// Obter todos os perfis
exports.getProfiles = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM perfil');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
