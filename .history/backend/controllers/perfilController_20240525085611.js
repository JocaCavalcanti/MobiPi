const pool = require('../db');

// Obter todos os perfis
exports.getPerfis = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM perfis');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Criar um novo perfil
exports.createPerfil = async (req, res) => {
  const { nomePerfil, urlImage, raPerfil } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO perfis (nomePerfil, urlImage, raPerfil) VALUES ($1, $2, $3) RETURNING *',
      [nomePerfil, urlImage, raPerfil]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obter um perfil por ID
exports.getPerfilById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM perfis WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Perfil não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Atualizar um perfil por ID
exports.updatePerfil = async (req, res) => {
  const { id } = req.params;
  const { nomePerfil, urlImage, raPerfil } = req.body;
  try {
    const result = await pool.query(
      'UPDATE perfis SET nomePerfil = $1, urlImage = $2, raPerfil = $3 WHERE id = $4 RETURNING *',
      [nomePerfil, urlImage, raPerfil, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Perfil não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Deletar um perfil por ID
exports.deletePerfil = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM perfis WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Perfil não encontrado' });
    }
    res.json({ message: 'Perfil deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
