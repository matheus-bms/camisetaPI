const express = require('express');
const controller = require('../controller/UserController')
const logado = require('../middlewares/estaLogado')
const  router = express.Router();
const errosMiddlewares = require('../middlewares/Erros');
const cartValidacao = require('../validators/cartValidacao')






router.get('/shop', controller.renderizarShop);




router.get('/:id', cartValidacao, controller.addcart );
router.use(logado); 
router.get('/', controller.renderizarCart);
router.patch('/', function(req, res){
    console.log(req.body)
    req.session.cart = req.body.carrinho
    req.session.formaPgto = req.body.formaPgto
    req.session.total = req.body.total
    res.send('/cart')
})



router.get('/checkout', logado, controller.renderizarCheckout);
router.post('/checkout', controller.testeCheckout);
//router.delete('/:id', controller.removeritem)




module.exports = router;