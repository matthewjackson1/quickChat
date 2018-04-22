'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chat = sequelize.define('Chat', {
    author: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  Chat.associate = function(models) {
    // associations can be defined here
  };
  return Chat;
};