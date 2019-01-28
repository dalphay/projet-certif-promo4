'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToBuy = sequelize.define('ToBuy', {
    total: DataTypes.INTEGER
  }, {});
  ToBuy.associate = function(models) {
    // associations can be defined here

/*** a toBuyt corresponds to several produc **/
    models.ToBuy.hasMany(models.ShoppingCart)
  };
  return ToBuy;
};