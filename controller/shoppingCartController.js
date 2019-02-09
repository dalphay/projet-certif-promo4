const models = require('../models');

class ShoppingCartController {
    static getAll(req, res){
        models.ShoppingCart.findAll().then( ShoppingCart => {
            res.send(ShoppingCarts)
        })
    }
}

module.exports = ShoppingCartController