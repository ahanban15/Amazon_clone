var express = require('express');
var router = express.Router();
var db = require('../database');


router.get('/', function (req, res, next) {
    res.render('add_product', { title: 'Add product form' })
  });

router.post('/add_product_form', function (req, res, next) {
  var product_id = req.body.product_id
  var product_name = req.body.product_name
  var product_brand = req.body.product_brand
  var product_price = req.body.product_price
  var product_ram = req.body.product_ram
  var product_storage = req.body.product_storage
  var product_camera = req.body.product_camera
  var product_image = req.body.product_image
  var product_quantity = req.body.product_quantity
  var product_status = req.body.product_status

  var sql = `INSERT INTO product (product_id, product_name, product_brand, product_price, product_ram, product_storage, product_camera, product_image, product_quantity, product_status) VALUES ("${product_id}", "${product_name}", "${product_brand}", "${product_price}", "${product_ram}", "${product_storage}", "${product_camera}", "${product_image}", "${product_quantity}", "${product_status}")`

  db.query(sql, function (err, result) {
    if (err) throw err
    console.log('New Product has been added')
    
    res.redirect('/')
  })
})

module.exports = router;