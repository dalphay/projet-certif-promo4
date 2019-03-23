'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    total: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  ShoppingCart.associate = function(models) {
    // associations can be defined here
    models.ShoppingCart.belongsTo(models.User, {foreignKey: 'userId'})

    /**ForeignKey ShoppingCart in Table ToBuy */
    models.ShoppingCart.hasMany(models.Product, {foreignKey:'idShoppingCart', targetKey:'idShoppingCart', onDelete: 'CASCADE'});
    ShoppingCart.hasMany(models.ToBuy,{as: 'addToBuys',foreignKey: "idShoppingCart",targetKey: 'idShoppingCart',onDelete: 'CASCADE'});
  };
  return ShoppingCart;
};