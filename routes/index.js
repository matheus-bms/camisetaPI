var express = require('express');
var router = express.Router();

router.get('/404', function(req, res, next) {
  res.render('404');
});

router.get('/blog-single', function(req, res, next) {
  res.render('blog-single');
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
});

router.get('/carrinho', function(req, res, next) {
  res.render('carrinho');
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact-us');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/detalhes-do-produto', function(req, res, next) {
  res.render('detalhes-do-produto');
});

router.get('/shop', function(req, res, next) {
  res.render('shop');
});

module.exports = router;
