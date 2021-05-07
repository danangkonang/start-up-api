/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const sosmed = sequelize.define('sosmed', {
    domain: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {});
  sosmed.associate = function (models) {
    // associations can be defined here
  };
  return sosmed;
};
