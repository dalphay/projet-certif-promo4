const models = require('../models');

class ProductController {
    static getAll(req, res){
        models.Product.findAll().then( Products => {
            res.send(Products)
        })
    }
}

module.exports = ProductController