var express = require('express');
var router = express.Router();
var createError = require('http-errors')
var session = require('express-session')
var flash = require('express-flash')
var express = require('express')
var logger = require('morgan')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var db = require('./database')



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addproductRouter = require('./routes/add_product');
var editproductRouter = require('./routes/edit_product');
var deleteproductRouter = require('./routes/delete_product');
var showStockRouter = require('./routes/show_stock');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add_product', addproductRouter);
app.use('/edit_product', editproductRouter);
app.use('/delete_product', deleteproductRouter);
app.use('/show_stock', showStockRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5555, function () {
    console.log('Node server is running on port : 5555')
  })
  module.exports = app