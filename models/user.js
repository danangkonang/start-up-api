'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};