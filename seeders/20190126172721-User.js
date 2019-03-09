'use strict';
var bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    var users = [];

    var hashedPassword = bcrypt.hashSync('kevindoquero', 12);

    for(var i = 0; i < 15; i++) {
      users.push({
        name: `Kevin Doquero ${i}`,
        email: `kevin.doque.${i}@yopmail.com`,
        password:  hashedPassword,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    // create an admin
    let admin = users.push({
      name: 'admin',
      email: 'admin@yopmail.com',
      password: bcrypt.hashSync('admin', 12),
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return queryInterface.bulkInsert('Users', users, {});
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
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
