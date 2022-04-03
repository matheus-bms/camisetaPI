var express = require('express');
const controller = require('../controller/UserController')
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/home');
});

router.get('/404', controller.renderizerBlogSingle);
router.get('/blog-single', controller.renderizerBlogSingle);
router.get('/blog', controller.renderizerBlog);
router.get('/carrinho', controller.renderizarCarrinho);
router.get('/checkout', controller.renderizarCheckout);
router.get('/contato', controller.renderizarContato);
router.get('/home', controller.renderizaHome);
router.get('/login', controller.formularioLogin);
router.post('/cadastro', controller.store)
router.get('/detalhes-do-produto', function(req, res, next) {
  res.render('detalhes-do-produto');
});

router.get('/shop', function(req, res, next) {
  res.render('shop');
});

module.exports = router;
