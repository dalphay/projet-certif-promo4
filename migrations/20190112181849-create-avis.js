'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Avis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_project: {
        type: Sequelize.INTEGER,
        references: {
          model:'Projects',
          key:"id"
        }
      },
      id_techno: {
        type: Sequelize.INTEGER,
        references: {
          model:'Technos',
          key:"id"
        }
      },
      commentaire: {
        type: Sequelize.STRING
      },
      notation: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Avis');
  }
};