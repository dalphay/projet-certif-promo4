const models = require('../models')

class UserController {
    static getAll(req, res){
        models.User.findAll().then(users => {
            res.send(users)
        })
    }
}

module.exports = UserController