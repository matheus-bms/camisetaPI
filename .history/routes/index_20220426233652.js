var express = require('express');
const controller = require('../controller/UserController')
var router = express.Router();


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
router.get('/detalhes-do-produto', function(req, res) {
  res.render('detalhes-do-produto');
});

module.exports = router;
