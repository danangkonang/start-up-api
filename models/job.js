'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    salaryStart: DataTypes.STRING,
    salaryEnd: DataTypes.STRING
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};