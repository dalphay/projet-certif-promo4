const express = require('express')
var UserController = require('./controller/userController')
var ShoppingCartController = require('./controller/shoppingCartController')
var ProductController = require('./controller/productController')
var TobuyController = require('./controller/tobuyController')



// var express = require('express');

var router = express.Router();


router.get('/', function (req, res) {
    res.send("welcome");
})
//root of connect to front-end
// Users routes (CRUD)
router.get('/products', authMiddleware,  isAdminMiddleware, ProductController.getAll);
router.get('/users', authMiddleware,  isAdminMiddleware, UserController.getAll);
router.get('/shoppingCarts', authMiddleware,  isAdminMiddleware, ShoppingCartController.getAll);
router.get('/tobuy', authMiddleware,  isAdminMiddleware, TobuyController.getAll);



 

module.exports = router