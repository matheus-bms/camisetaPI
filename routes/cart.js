const express = require('express');
const controller = require('../controller/UserController')
const logado = require('../middlewares/estaLogado')
const  router = express.Router();
const errosMiddlewares = require('../middlewares/Erros');







router.get('/shop', controller.renderizarShop);
router.get('/:id', controller.addcart );
router.get('/', controller.renderizarCart);
router.use(logado); 

router.get('/checkout', logado, controller.renderizarCheckout);
router.post('/checkout', controller.testeCheckout);




module.exports = router;