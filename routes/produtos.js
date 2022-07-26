const express = require('express');
const controller = require('../controller/UserController')
const logado = require('../middlewares/estaLogado')
const validadorDelogin = require('../validators/formLogin')
const validationDeCadastro = require('../validators/cadastroValidations')
const  router = express.Router();
const errosMiddlewares = require('../middlewares/Erros');
const { Router } = require('express');
const {produtos} =require('../db');
const produto = require('../db/models/produto');
const { route } = require('./login');


route.get('/', (req, res) => {
  //adicionar todos os produtos
  produto.findAll()
    .then((produtos)=> 
        res.status(200).send(produto))
})
.catch((err)=>{
  res.status(500).send({
      error: "Não possivel encontrar os produtos"
  })
})
 route.post('/', (req, res)=> {
  // validate
  if(isNaN(req.body.preco)){
    return res.status(403).send({
      error: "o Preço não é Valido"
    })
  }
  // adicionar novo produtos
  produto.create({
    name: req.body.name,
    preco: parseFloat (req.body.preco),
    tamanho: req.body.tamanho,
    descricao: req.body.descricao,
    imagem: req.body.imagem,
    genero: req.body.imagem
  }).then((produto)=> {
    res.status(201).send(produto)
    
  }).catch((error)=>{
    res.status(501).send({
      error: "erro em adicionar o produto"
    })
  })
 })




router.get('/compras', controller.renderizarcompras);

router.use(logado)

router.post('/compras', controller.comprarAgora);
router.delete('/concluir-compra', controller.renderizarCompraConcluir)
router.delete('/cancelar-compra', controller.cancelarCompra)
router.get('/detalhes-do-produto', function(req, res) {
  res.render('detalhes-do-produto');
});

module.exports = route