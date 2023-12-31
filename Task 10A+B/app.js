// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// app.listen(3000, function(){
//   console.log('Server is running on port 3000');
// });

// module.exports = app;

// App.js

var express = require("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose =
		require("passport-local-mongoose")
const User = require("./model/User");

var indexroute = require('./routes/index')
var registerroute = require('./routes/register')
var loginroute = require('./routes/login')
var mainroute = require('./routes/main')
var addcartroute = require('./routes/add_cart')

var app = express();
var path = require('path')
mongoose.connect("mongodb://127.0.0.1:27017");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.use(require("express-session")({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
// app.get("/", function (req, res) {
// 	res.render("home");
// });

app.use('/', indexroute);
app.use('/register', registerroute);
app.use('/login', loginroute);
app.use('/main', mainroute);
app.use('/add_cart', addcartroute);


app.get("/main", isLoggedIn, function (req, res) {
	res.render("main");
});

// Showing register form
// app.get("/register", function (req, res) {
// 	res.render("register");
// });

// // Handling user signup
// app.post("/register", async (req, res) => {
// 	const user = await User.create({
// 	username: req.body.username,
// 	email: req.body.email,
// 	password: req.body.password
// 	});
	
// 	// return res.status(200).json(user);
//   res.redirect('/login')
// });

//Showing login form
// app.get("/login", function (req, res) {
// 	res.render("login");
// });

// //Handling user login
// app.post("/login", async function(req, res){
// 	try {
// 		// check if the user exists
// 		const user = await User.findOne({ username: req.body.username });
// 		if (user) {
// 		//check if password matches
// 		const result = req.body.password === user.password;
// 		if (result) {
// 			res.render("secret");
// 		} else {
// 			res.status(400).json({ error: "password doesn't match" });
// 		}
// 		} else {
// 		res.status(400).json({ error: "User doesn't exist" });
// 		}
// 	} catch (error) {
// 		res.status(400).json({ error });
// 	}
// });

//Handling user logout
app.get("/logout", function (req, res) {
	req.logout(function(err) {
		if (err) { return next(err); }
		res.redirect('/');
	});
});



function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/login");
}

// var port = process.env.PORT || 3000;
// app.listen(port, function () {
// 	console.log("Server Has Started!");
// });

// app.listen(3000, function () {
//   console.log('Node server is running on port : 3000')
// })
// module.exports = app

app.listen(5555, function () {
  console.log('Node server is running on port : 5555')
})
module.exports = app