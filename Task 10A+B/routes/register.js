var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
var passport = require("passport")
const User = require("../model/User");
var bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose =
        require("passport-local-mongoose")

        var path = require('path')
mongoose.connect("mongodb://127.0.0.1:27017");

// router.set("view engine", "ejs");

router.use(bodyParser.urlencoded({ extended: true }));

router.use(express.static(path.join(__dirname, 'public')))

router.use(require("express-session")({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));

router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get("/", function (req, res) {
	res.render("register");
});

// Handling user signup
router.post("/user_register", async (req, res) => {
	const user = await User.create({
	username: req.body.username,
	email: req.body.email,
	password: req.body.password
	});
	
    // console.log()
	// return res.status(200).json(user);
    // req.flash('success', 'Successful Signup!')
    res.redirect('/login')
});

module.exports = router;