'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    agence_de_dev: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.hasMany(models.Techno, { through: Project_Techno });
    models.Project.hasMany(models.Avis,{ foreignKey: "id_project"}, { foreignKey: "id_techno"} )

  };
  return Project;
};