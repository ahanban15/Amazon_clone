const express = require('express');
var router = express.Router();
const mysql = require('mysql');

const body_parser = require('body-parser');

const session = require('express-session');

router.use(body_parser.urlencoded({ extended: true }));

// const app = express();

// app.use(body_parser.urlencoded({ extended : false }));

// app.use(body_parser.json());

// //middleware for serving static file
// app.use(express.static('public'));

// //Set up EJS as template engine
// app.set('view engine', 'ejs');

//Make MySQL Database Connection
const connection = mysql.createConnection({
	host : 'localhost',
	database : 'testing',
	user : 'root',
	password : '1234#Ahan'
});

//Check MySQL Database Connection
connection.connect((error) => {
	console.log('MySQL Database is connected Successfully');
});

//Set up Session Middleware
router.use(session({
	secret : '1234567890abcdefghijklmnopqrstuvwxyz',
	resave : false,
	saveUninitialized : true,
	cookie : { secure : false }
}));

//Create Route for Load Product Data
router.get("/", (request, response) => {

	const query = `SELECT * FROM product`;

	//Execute Query
	connection.query(query, (error, result) => {

		if(!request.session.cart)
		{
			request.session.cart = [];
		}

		response.render('show_stock.ejs', { products : result, cart : request.session.cart, title: 'Amazon Smartphone inventory' });

	});

});

module.exports = router;
