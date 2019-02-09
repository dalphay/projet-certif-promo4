'use strict';
module.exports = (sequelize, DataTypes) => {

  
  const Product = sequelize.define('Product', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here

    /**ForeignKey id_Product in table ToBuy*/
    Product.belongsToMany(models.ShoppingCart, {through: models.ToBuy, foreignKey:'idProduct', onDelete: 'CASCADE'})
    // models.Product.hasMany(models.ToBuy)
  };
  return Product;
};