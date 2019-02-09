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
    models.ShoppingCart.belongsTo(models.User)

    /**ForeignKey ShoppingCart in Table ToBuy */
    // models.ShoppingCart.hasMany(models.Product,{through: {models:models.toBuy},foreignKey:'idShoppingCart'})
  };
  return ShoppingCart;
};