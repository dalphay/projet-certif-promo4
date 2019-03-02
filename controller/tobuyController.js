const models = require('../models');

class TobuyController {
    static getAll(req, res){
        models.Tobuy.findAll().then( Tobuy => {
            res.send(Tobuys)
        })
    }
}

module.exports = TobuyController