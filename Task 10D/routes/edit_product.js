var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/', function (req, res, next) {
    res.render('edit_product', { title: 'Edit product form' })
  });

router.post('/edit_product_form', function (req, res, next) {
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

//   var sql = `INSERT INTO product (product_id, product_name, product_brand, product_price, product_ram, product_storage, product_camera, product_image, product_quantity, product_status) VALUES ("${product_id}", "${product_name}", "${product_brand}", "${product_price}", "${product_ram}", "${product_storage}", "${product_camera}", "${product_image}", "${product_quantity}", "${product_status}")`
  var sql = `UPDATE product 
            SET product_name = "${product_name}", 
                product_brand = "${product_brand}",
                product_price = "${product_price}",
                product_ram = "${product_ram}",
                product_storage = "${product_storage}",
                product_camera = "${product_camera}",
                product_image = "${product_image}",
                product_quantity = "${product_quantity}",
                product_status = "${product_status}"
            WHERE product_id = "${product_id}"`  

  db.query(sql, function (err, result) {
    if (err) throw err
    console.log('New Product features has been edited')
    // req.flash('success', 'New Product Added!')
    
    res.redirect('/')
  })
})

module.exports = router;