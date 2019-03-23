const models = require('../models');

class ShoppingCartController {
    static getAll(req, res){
        models.ShoppingCart.findAll().then( ShoppingCart => {
            res.send(ShoppingCart)
        })
    }

}

module.exports = ShoppingCartController