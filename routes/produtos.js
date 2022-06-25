const express = require('express');
const controller = require('../controller/UserController')
const logado = require('../middlewares/estaLogado')
const validadorDelogin = require('../validators/formLogin')
const validationDeCadastro = require('../validators/cadastroValidations')
const  router = express.Router();
const errosMiddlewares = require('../middlewares/Erros');
const { Router } = require('express');


router.get('/', function(req, res) {
    res.redirect('/');
});
const produtoRouter = Router()

router.get('/compras', controller.renderizarcompras);
router.post('/compras', controller.comprarAgora);
router.delete('/concluir-compra', controller.renderizarCompraConcluir)
router.delete('/cancelar-compra', controller.cancelarCompra)
router.get('/detalhes-do-produto', function(req, res) {
  res.render('detalhes-do-produto');
});

module.exports = produtoRouter