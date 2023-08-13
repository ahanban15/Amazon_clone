var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/', function (req, res, next) {
    res.render('delete_product', { title: 'Delete product form' })
  });

router.post('/delete_product_form', function (req, res, next) {
  var product_id = req.body.product_id

    var sql = `DELETE FROM product WHERE product_id = "${product_id}"`

  db.query(sql, function (err, result) {
    if (err) throw err
    console.log('Product has been deleted')
    // req.flash('success', 'New Product Added!')
    
    res.redirect('/')
  })
})

module.exports = router;