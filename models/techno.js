'use strict';
module.exports = (sequelize, DataTypes) => {
  const Techno = sequelize.define('Techno', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Techno.associate = function(models) {
    // associations can be defined here
    Techno.belongsToMany(models.Project, { through: Project_Techno });
    // Techno.hasMany(models.Avis, { through: Avis });
    models.Techno.hasMany(models.Avis, { foreignKey: "id_project"}, { foreignKey: "id_techno"})

  };
  return Techno;
};