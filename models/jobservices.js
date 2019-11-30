'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobServices = sequelize.define('JobServices', {
    userId: DataTypes.INTEGER,
    jobCategoriId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    salaryStart: DataTypes.STRING,
    salaryEnd: DataTypes.STRING
  }, {});
  JobServices.associate = function(models) {
    // associations can be defined here
  };
  return JobServices;
};