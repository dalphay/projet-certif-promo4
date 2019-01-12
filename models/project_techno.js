'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project_Techno = sequelize.define('Project_Techno', {
    id_project: DataTypes.INTEGER,
    id_techno: DataTypes.INTEGER
  }, {});
  Project_Techno.associate = function(models) {
    // associations can be defined here
  };
  return Project_Techno;
};