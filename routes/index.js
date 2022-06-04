const express = require('express');
const controller = require('../controller/UserController')
const validadorDelogin = require('../validators/formLogin')
const  router = express.Router();
const errosMiddlewares = require('../Middleware/Erros');




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
router.post('/login',validadorDelogin,errosMiddlewares, controller.fazerLogin);
router.get('/compras', controller.renderizarcompras);
router.post('/compras', controller.comprarAgora);
router.post('/cadastro', controller.store)
router.delete('/concluir-compra', controller.renderizarCompraConcluir)
router.delete('/cancelar-compra', controller.cancelarCompra)
router.get('/detalhes-do-produto', function(req, res) {
  res.render('detalhes-do-produto');
});

module.exports = router;
