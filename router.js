const express = require('express')
// var Products = require('./controller/Products')
var ShoppingCartController = require('./controller/shoppingCartController')
var ProductController = require('./controller/productController')
var TobuyController = require('./controller/tobuyController')
var AuthController = require('./controller/authController')
var authMiddleware = require('./middlewares/authMiddleware')
var isAdminMiddleware = require('./middlewares/isAdminMiddleware')
var UserController = require('./controller/userController')


// var express = require('express');
// we create the router
var router = express.Router();

// Authentication routes
router.post("/auth/login", AuthController.login);
router.post("/auth/register", AuthController.register);
router.post("/auth/logout", AuthController.logout);



router.get('/', function (req, res) {
    res.send("welcome");
})
//root of connect to front-end
// Users routes (CRUD)
router.get('/products', authMiddleware,  isAdminMiddleware, ProductController.getAll);
router.get('/users', authMiddleware,  isAdminMiddleware, ProductController.getAll);
router.get('/shoppingCarts', authMiddleware,  isAdminMiddleware, ShoppingCartController.getAll);
router.get('/tobuy', authMiddleware,  isAdminMiddleware, TobuyController.getAll);


// Users routes (CRUD)
router.post("/users", authMiddleware, UserController.create); // C
// router.get("/users", authMiddleware, UserController.index); // R
router.get("/users/:id",authMiddleware,  UserController.show); // R
router.put("/users/:id", authMiddleware, UserController.update); // U
router.delete("/users/:id", authMiddleware, UserController.delete); // D


// Products routes (CRUD)
router.post("/products", authMiddleware, ProductController.create); // C
// router.get("/products", authMiddleware,  isAdminMiddleware, ProductController.index); // R
router.get("/products/:id",authMiddleware,  isAdminMiddleware,  ProductController.show); // R
router.put("/products/:id", authMiddleware, ProductController.update); // U
router.delete("/products/:id", authMiddleware, ProductController.delete); // D


 

module.exports = router