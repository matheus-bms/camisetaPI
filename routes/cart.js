const express = require('express');
const controller = require('../controller/UserController')
const logado = require('../middlewares/estaLogado')
const  router = express.Router();
const errosMiddlewares = require('../middlewares/Erros');






router.get('/', function(req, res) {
  res.redirect('/home');
});
router.get('/shop', controller.renderizarShop);
router.get('/cart/:id', (req, res)=> {
    res.send(`o id recebido foi ${req.params.id}`)
})
router.use(logado); 

router.get('/cart', controller.renderizarCart);
router.get('/checkout', logado, controller.renderizarCheckout);
router.post('/checkout', controller.testeCheckout);




module.exports = router;