const express = require('express');
const controller = require('../controller/UserController')
const logado = require('../middlewares/estaLogado')
const validadorDelogin = require('../validators/formLogin')
const validationDeCadastro = require('../validators/cadastroValidations')
const  router = express.Router();
const errosMiddlewares = require('../middlewares/Erros');




router.get('/', function(req, res) {
  res.redirect('/carrinho');
});

router.get('/cart', controller.renderizarCart);
router.get('/checkout', logado, controller.renderizarCheckout);
router.post('/checkout', controller.testeCheckout);
router.get('/shop', controller.renderizarShop);

router.use(logado); 

module.exports = router