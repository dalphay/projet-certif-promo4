'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    for(var i = 0; i < 15; i++) {
      products.push({
        name: `Huggo boss ${i}`,
        Category: 'montre femme',
        price:  99,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    let product = products.push({
      name: 'montre argentée',
      Category: 'bijoux femme',
      price: 89,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return queryInterface.bulkInsert('Products', products, {});
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
