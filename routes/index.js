const express = require('express');
const controller = require('../controller/UserController')
const logado = require('../middlewares/estaLogado')
const validadorDelogin = require('../validators/formLogin')
const validationDeCadastro = require('../validators/cadastroValidations')
const  router = express.Router();
const errosMiddlewares = require('../middlewares/Erros');
const { store } = require('../controller/UserController');




router.get('/', function(req, res) {
  res.redirect('/home');
});

router.get('/home', controller.renderizaHome);
router.use('/contato',controller.renderizarContato);
router.get('/404', controller.renderizar404);
router.get('/blog-single', controller.renderizerBlogSingle);
router.get('/blog', controller.renderizerBlog);
router.use('/cart',controller.renderizarCart);
router.use('/login', controller.formularioLogin);
router.use('/login', controller.fazerLogin);
router.use('/produtos', controller.renderizarProdutos);
router.use('/checkout',controller.renderizarCheckout);
router.use('/favoritos', controller.renderizarFavoritos);
router.use('/minhaconta', controller.renderizarMinhaconta);
router.use('/cadastro',controller.store)





// Nenhuma rota estará acessivel daqui para baixo sem login!!




module.exports = router;
