const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuario-controller.js');

router.get('/listar', usuariosController.listar);

router.post('/', usuariosController.criar);

router.put('/:id', usuariosController.atualizar);

router.delete('/:id', usuariosController.remover);

module.exports = router;