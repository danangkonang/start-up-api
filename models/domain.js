/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const domain = sequelize.define('domain', {
    name: DataTypes.STRING,
  }, {});
  domain.associate = function (models) {
    // associations can be defined here
  };
  return domain;
};
