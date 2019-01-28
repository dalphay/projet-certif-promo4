'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    var shoppingCarts = []
    var user = []

    for(var i = 0; i < user.length; i++) {
      shoppingCarts.push({
        total: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    /** create shoppingCarts */
    // let shoppingCart = shoppingCarts.push({
    //   total: 15,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // })

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
