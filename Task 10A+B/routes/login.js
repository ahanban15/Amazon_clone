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
	res.render("login");
});

//Handling user login
router.post("/user_login", async function(req, res){
	try {
		// check if the user exists
		const user = await User.findOne({ username: req.body.username });
		if (user) {
		//check if password matches
		const result = req.body.password === user.password;
		if (result) {
			res.redirect('/main')
			// res.redirect('/add_cart')
		} else {
			res.status(400).json({ error: "password doesn't match" });
		}
		} else {
		res.status(400).json({ error: "User doesn't exist" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;