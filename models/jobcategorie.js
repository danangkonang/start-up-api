'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobCategorie = sequelize.define('JobCategorie', {
    name: DataTypes.STRING
  }, {});
  JobCategorie.associate = function(models) {
    // associations can be defined here
  };
  return JobCategorie;
};