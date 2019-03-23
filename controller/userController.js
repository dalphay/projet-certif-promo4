const models = require('../models')

class UserController {
    static getAll(req, res){
        models.User.findAll().then(users => {
            res.send(users)
        })
    }
    static getById(req, res) {
        models.User.findByPk(req.params.id).then(user => {
            models.ShoppingCart.findOne( {where: {
                userId: req.params.id
            },include: models.Tobuy
        }).then(shoppingCart=>{
                console.log(shoppingCart);
                models.ToBuy.findAll({where:{idShoppingCart:shoppingCart.id}}).then(currentToBuys=>{
                    res.status(200).send({user: user,shoppingCart:shoppingCart,toBuys:currentToBuys})
                })
                
            })
            
        })
    }
    static getById2(req, res) {
        models.User.findByPk(req.params.id).then(user => {
            models.ShoppingCart.findOne( {where: {
                UserId: req.params.id
            },include: "addToBuys"
        }).then(shoppingCart => {
                delete user.dataValues.password;
                console.log(shoppingCart,user);

                    res.status(200).send({user: user,shoppingCart:shoppingCart})
            })
            
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

}

module.exports = UserController