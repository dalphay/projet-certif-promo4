'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToBuy = sequelize.define('ToBuy', {
    idProduct:{
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idShoppingCart:{
      primaryKey: true,
      type: DataTypes.INTEGER
    } ,
    qty: DataTypes.INTEGER
    
  }, {});
  ToBuy.associate = function(models) {
    // associations can be defined here
  };
  return ToBuy;
};