
const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');

// Rota para obter todos os perfis
router.get('/', perfilController.getPerfis);

// Rota para criar um novo perfil
router.post('/', perfilController.createPerfil);

// Rota para obter um perfil pelo ID
router.get('/:id', perfilController.getPerfilById);

// Rota para atualizar um perfil pelo ID
router.put('/:id', perfilController.updatePerfil);

// Rota para deletar um perfil pelo ID
router.delete('/:id', perfilController.deletePerfil);

module.exports = router;
