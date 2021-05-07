/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const information = sequelize.define('information', {
    type: DataTypes.STRING,
    domain: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    images: DataTypes.STRING,
    link: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    promo: DataTypes.STRING,
    promoFrom: DataTypes.DATE,
    promoTo: DataTypes.DATE,
  }, {});
  information.associate = function (models) {
    // associations can be defined here
  };
  return information;
};
