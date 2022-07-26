const express = require('express');
const bcrypt = require('bcrypt');
const { Usuario, Produto } = require('../db/models')
const fazerLogin = express.Router();
const EXPIRE = 300 * 1000


const userForm = async (req, res)=>{
  await res.render('contato');
}
module.exports = {
  userForm
}

module.exports =  {
  store: async (req, res) => {
    const { nome, email, senha } = req.body;

    //const user = await User.create({ nome, login: email, senha: senha });
    const hash = bcrypt.hashSync(senha, 12)
    const db = await Usuario.create({
      nome,
      login: email,
      email,
      senha: hash,
      nascimento: '2000-06-16'
    })
    return res.json({db})
    
    
  },
  checkout: async function (req, res) {
    const { email, senha } = req.body;
    const checkout = await User.findOne({ where: { login: email, senha: senha } });

    return res.json(checkout)
  },
  produtos: async function (req, res) {
    const Fprodutos =  { 
      nome,
      preco,
      tamanho,
      descricao, 
      imagem,
      genero,
     } = req.body;
    //const produtos = await User.Produto({ where: { nome: nome, senha: senha } });

    //return res.json(produtos)
  },

  //Comparações de Senhas !!! 
  
  fazerLogin: async function (req, res) {
    const { email, senha } = req.body;
    const users = await Usuario.findOne({ where: { login: email,  } });
    if(!users){
      return res.json({mensagem:"usuario ou senha inválidos"})
    }
    
    const senhaEstaCorreta = bcrypt.compareSync(senha, users.senha)
    if (!senhaEstaCorreta){ // O ponto de exclamação ele inverte o resultado (operador not)!!
      return res.json({mensagem:"usuario ou senha inválidos"})
    }
    users.senha = undefined
    delete users.senha
    console.log(req.session.User) 
    req.session.User = users  // ID: quando quiser exibir alguma coisa.
    res.json(users);
  },
  comprarAgora: function (req, res) {
    res.send('compras')
  },
  renderizarcompras: function (req, res) {
    res.send('compras')
  },
  formularioLogin: function (req, res) {
    res.render('login');
  },
  renderizaHome: async function  (req, res) {
    const produtos = await Produto.findAll()
    res.render('home', {produtos});
  },
  renderizarContato: function (req, res) {
    res.render('contato');
  },
  renderizarCheckout: function (req, res) {
    res.render('checkout');
  },
  testeCheckout: function (req, res) {
    res.send('checkout');
  },
  renderizarCart: function (req, res) {
    res.render('cart');
  },
  renderizerBlog: function (req, res) {
    res.render('blog');
  },
  renderizerBlogSingle: function (req, res) {
    res.render('blog-single');
  },
  renderizar404: function (req, res) {
    res.render('404');
  },
  renderizarCompraConcluir: function (req, res) {
    res.render('compras');
  },
  renderizarProdutos: function (req, res) {
    res.render('Produtos');
  },
  renderizarMinhaconta: function (req, res) {
    res.render('minhaconta');
  },
  renderizarFavoritos: function (req, res) {
    res.render('favoritos');
  },
  cancelarCompra: function (req, res) {
    res.render('compras');
  },
  renderizarShop: function (req, res) {
    req.session.login = "ok"
    res.render('shop');
  },
 
};