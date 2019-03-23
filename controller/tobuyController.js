const models = require('../models');

class TobuyController {
    static getAll(req, res){
        models.ToBuy.findAll().then( Tobuy => {
            res.send(Tobuy)
        })
    }
}

module.exports = TobuyController