var express = require('express');
const controller = require('../controller/UserController')
var router = express.Router();
<<<<<<< HEAD
=======
//const carrinho = require('../controller/carrinho');
>>>>>>> af0ebe35a335b076643f7a2ee5da087674cce9c8


router.get('/', function(req, res) {
  res.redirect('/home');
});
router.get('/shop', controller.renderizarShop);
router.get('/404', controller.renderizar404);
router.get('/blog-single', controller.renderizerBlogSingle);
router.get('/blog', controller.renderizerBlog);
router.get('/cart', controller.renderizarCart);
router.get('/checkout', controller.renderizarCheckout);
router.post('/checkout', controller.testeCheckout);
router.get('/contato', controller.renderizarContato);
router.get('/home', controller.renderizaHome);
router.get('/login', controller.formularioLogin);
router.post('/login', controller.fazerLogin);
router.get('/compras', controller.renderizarcompras);
router.post('/compras', controller.comprarAgora);
router.post('/cadastro', controller.store)
router.delete('/concluir-compra', controller.renderizarCompraConcluir)
router.delete('/cancelar-compra', controller.cancelarCompra)
router.get('/detalhes-do-produto', function(req, res) {
  res.render('detalhes-do-produto');
});

module.exports = router;
