function estaLogado(req, res, next) {
  if (req.session.User) {
    return next();
  }

  return res.redirect('/login');
}

module.exports = estaLogado;


