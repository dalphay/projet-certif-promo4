const models = require('../models')

class UserController {
    static getAll(req, res){
        models.User.findAll().then(users => {
            res.send(users)
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

module.exports = UserController