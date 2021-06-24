/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define('content', {
    name: DataTypes.STRING,
  }, {});
  content.associate = function (models) {
    // associations can be defined here
  };
  return content;
};
