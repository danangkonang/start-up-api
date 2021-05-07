/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const typeInformation = sequelize.define('type_information', {
    domain_target: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {});
  typeInformation.associate = function (models) {
    // associations can be defined here
  };
  return typeInformation;
};
