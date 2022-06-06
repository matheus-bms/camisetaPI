const dotenv = require('dotenv')
dotenv.config()
const path = require('path');
const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const Auth = require('./Middleware/Auth');

const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //serve para transformar em jason
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.MEU_PROJETO,   // Configurando dot env. (Variavel de Ambiente)
  resave: false,
  saveUninitialized: false,
  name: process.env.COOKIE, // Configurando dot env. (Variavel de Ambiente)
  resave: false,
  cookie: {
      httpOnly: true,
      secure: false,
  }
}));

app.use(Auth)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', indexRouter);
app.use('/checkout', indexRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler(gerenciador de erros de req.)
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('404');
});

module.exports = app;
