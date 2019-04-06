const models = require('../models');

class ProductController {
    /**Method for get all products */
    static getAll(req, res){
        models.Product.findAll().then( Products => {
            res.send(Products)
        })
    }
        /**Method to get a product by its id*/
    static getById(req, res){
        models.Product.findAll().then( Products => {
            res.send(Products)
        })
    }

    static create(req, res){
        res.send('is ok')
    }
    
    static update(req, res){
        res.send('is ok')
    }

    static delete(req, res){
        res.send('is ok')
    }

    static show(req, res){
        res.send('is ok')
    }
    
}

module.exports = ProductController