const express = require('express')
var UserController = require('./controller/userController')
var ShoppingCartController = require('./controller/shoppingCartController')
var ProductController = require('./controller/productController')


// var express = require('express');

var router = express.Router();


router.get('/', function (req, res) {
    res.send("welcome");
})

router.get('/products', ProductController.getAll);
router.get('/users', UserController.getAll);
router.get('/shoppingCarts', ShoppingCartController.getAll);





module.exports = router