'use strict';
module.exports = (sequelize, DataTypes) => {
  const Avis = sequelize.define('Avis', {
    commentaire: DataTypes.STRING,
    notation: DataTypes.INTEGER,
    id_project: DataTypes.INTEGER,
    id_techno: DataTypes.INTEGER
  }, {});
  Avis.associate = function(models) {
    // associations can be defined here
    models.Avis.belongsTo(models.Techno)
    models.Avis.belongsTo(models.Project)
  };
  return Avis;
};