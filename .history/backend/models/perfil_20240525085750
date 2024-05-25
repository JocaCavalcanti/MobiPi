const pool = require('../db');

// Função para obter todos os perfis
const getAllPerfis = async () => {
  const result = await pool.query('SELECT * FROM perfis');
  return result.rows;
};

// Função para criar um novo perfil
const createPerfil = async (nomePerfil, urlImage, raPerfil) => {
  const result = await pool.query(
    'INSERT INTO perfis (nomePerfil, urlImage, raPerfil) VALUES ($1, $2, $3) RETURNING *',
    [nomePerfil, urlImage, raPerfil]
  );
  return result.rows[0];
};

// Função para obter um perfil por ID
const getPerfilById = async (id) => {
  const result = await pool.query('SELECT * FROM perfis WHERE id = $1', [id]);
  return result.rows[0];
};

// Função para atualizar um perfil por ID
const updatePerfil = async (id, nomePerfil, urlImage, raPerfil) => {
  const result = await pool.query(
    'UPDATE perfis SET nomePerfil = $1, urlImage = $2, raPerfil = $3 WHERE id = $4 RETURNING *',
    [nomePerfil, urlImage, raPerfil, id]
  );
  return result.rows[0];
};

// Função para deletar um perfil por ID
const deletePerfil = async (id) => {
  const result = await pool.query('DELETE FROM perfis WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllPerfis,
  createPerfil,
  getPerfilById,
  updatePerfil,
  deletePerfil,
};
