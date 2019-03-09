const models = require('../models');

class ProductController {
    static getAll(req, res){
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