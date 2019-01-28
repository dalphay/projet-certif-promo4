'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    /**ForeignKey id_Product in table ToBuy*/
    models.Product.belongsToMany(models.ShoppingCart,{through: {models:models.toBuy},foreignKey:'idProduct'})
    // models.Product.hasMany(models.ToBuy)
  };
  return Product;
};