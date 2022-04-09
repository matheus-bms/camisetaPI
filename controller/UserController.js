const {User} = require('../models')
module.exports = {
     store: async (req, res)=> {
        const { nome, email, senha} = req.body;

        const user = await User.create({nome, login: email, senha});

        return res.json(user)

    }, 
    fazerLogin: async function (req, res) {
      const {email, senha} = req.body;
      const usuario = await User.findOne({where:{login: email}})

      return  res.json(usuario)
    },
    comprarAgora: function(req, res){
      res.render('compras')
    },
    formularioLogin: function(req, res) {
  res.render('login');
    },
    renderizaHome: function(req, res) {
  res.render('home'); 
    },
    renderizarContato: function(req, res) {
  res.render('contato');
   },
    renderizarCheckout: function(req, res) {
  res.render('checkout');
   },
    renderizarCarrinho: function(req, res) {
  res.render('carrinho');
   },
    renderizerBlog: function(req, res) {
  res.render('blog');
   },
    renderizerBlogSingle: function(req, res) {
  res.render('blog-single');
   },
    renderizar404: function(req, res) {
  res.render('404');
},
    renderizarShop: function(req, res) {
  res.render('shop');
    },
};
