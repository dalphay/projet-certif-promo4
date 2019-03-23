'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToBuy = sequelize.define('ToBuy', {
    qty: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER,
    idShoppingCart: DataTypes.INTEGER
    
  }, {});
  ToBuy.associate = function(models) {
    // associations can be defined here

/*** a toBuyt corresponds to several produc **/
    models.ToBuy.belongsToMany(models.ShoppingCart, {through: models.Product, foreignKey:'idTobuy',})
  };
  return ToBuy;
};