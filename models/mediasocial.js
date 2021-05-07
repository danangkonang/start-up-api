/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const mediaSocial = sequelize.define('mediaSocial', {
    domain_target: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {});
  mediaSocial.associate = function (models) {
    // associations can be defined here
  };
  return mediaSocial;
};
