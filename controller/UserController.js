const {User} = require('../models')
module.exports = {
     store: async (req, res)=> {
        const { nome, email} = req.body;

        const user = await User.create({nome, login: email});

        return res.json(user)

    }, 
    formularioLogin: function(req, res) {
  res.render('login');
    },
    renderizaHome: function(req, res) {
  res.render('home'); 
    }
}