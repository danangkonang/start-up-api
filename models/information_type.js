/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const informationType = sequelize.define('information_type', {
    name: DataTypes.STRING,
  }, {});
  informationType.associate = function (models) {
    // associations can be defined here
  };
  return informationType;
};
