/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const type = sequelize.define('type', {
    domain_target: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {});
  type.associate = function (models) {
    // associations can be defined here
  };
  return type;
};
