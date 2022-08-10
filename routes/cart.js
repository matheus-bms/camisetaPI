const express = require('express');
const controller = require('../controller/UserController')
const logado = require('../middlewares/estaLogado')
const  router = express.Router();
const errosMiddlewares = require('../middlewares/Erros');
const cartValidacao = require('../validators/cartValidacao')






router.get('/shop', controller.renderizarShop);
<<<<<<< HEAD
router.get('/:id', controller.addcart );
router.get('/', controller.renderizarCart);
router.use(logado); 

=======
router.get('/:id', cartValidacao, controller.addcart );
router.get('/', controller.renderizarCart);
router.use(logado); 


>>>>>>> a04f1d3aff6f4227e05e8bb04a78979fd512297e
router.get('/checkout', logado, controller.renderizarCheckout);
router.post('/checkout', controller.testeCheckout);
//router.delete('/:id', controller.removeritem)




module.exports = router;