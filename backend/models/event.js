const pool = require('../db');

// Função para obter todos os eventos
const getAllEvents = async () => {
  const result = await pool.query('SELECT * FROM events');
  return result.rows;
};

// Função para criar um novo evento
const createEvent = async (title, description, imageUrl, date) => {
  const result = await pool.query(
    'INSERT INTO events (title, description, imageUrl, date) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, imageUrl, date]
  );
  return result.rows[0];
};

module.exports = {
  getAllEvents,
  createEvent,
};
