const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models')
const fazerLogin = express.Router();
const EXPIRE = 300 * 1000


module.exports = {
  store: async (req, res) => {
    const { nome, email, senha } = req.body;

    //const user = await User.create({ nome, login: email, senha: senha });
    const hash = bcrypt.hashSync(senha, 12)
    return res.json({ nome, email, senha: hash })

  },
  checkout: async function (req, res) {
    const { email, senha } = req.body;
    const checkout = await User.findOne({ where: { login: email, senha: senha } });

    return res.json(checkout)
  },

  //Comparações de Senhas !!! 
  
  fazerLogin: async function (req, res) {
    const { email, senha } = req.body;
    // const users = await User.findOne({ where: { login: email, senha: senha } });
    const crypto = "$2b$12$DpLrUwCng0f82eouIhDS0OTXDn/H1rrvyBYoADr6/pzLCvtujpE8m" // comparação de senhas 
    const senhaEstaCorreta = bcrypt.compareSync(senha, crypto)
    if (!senhaEstaCorreta){ // O ponto de exclamação ele inverte o resultado (operador not)!!
      return res.json({mensagem:"usuario ou senha inválidos"})
    }
    req.session.User = { email, id:1 }   // ID: quando quiser exibir alguma coisa.
    res.json({ email });
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
  renderizaHome: function (req, res) {
    res.render('home');
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
  cancelarCompra: function (req, res) {
    res.render('compras');
  },
  renderizarShop: function (req, res) {
    req.session.login = "ok"
    res.render('shop');
  },
};
