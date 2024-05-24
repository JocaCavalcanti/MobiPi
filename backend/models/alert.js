const pool = require('../db');

// Função para obter todos os alertas
const getAllAlerts = async () => {
  const result = await pool.query('SELECT * FROM alerts');
  return result.rows;
};

// Função para criar um novo alerta
const createAlert = async (title, description, date) => {
  const result = await pool.query(
    'INSERT INTO alerts (title, description, date) VALUES ($1, $2, $3) RETURNING *',
    [title, description, date]
  );
  return result.rows[0];
};

module.exports = {
  getAllAlerts,
  createAlert,
};
