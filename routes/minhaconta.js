const express = require('express');
const controller = require('../controller/UserController')
const logado = require('../middlewares/estaLogado')
const validadorDelogin = require('../validators/formLogin')
const validationDeCadastro = require('../validators/cadastroValidations')
const  router = express.Router();
const errosMiddlewares = require('../middlewares/Erros');
const { Router } = require('express');


router.get('/', function(req, res) {
    res.redirect('/login');
});
router.use(logado); 

router.get('/minhaconta', controller.renderizarMinhaconta)

module.exports = router;