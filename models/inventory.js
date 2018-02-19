'use strict';
module.exports = (sequelize, DataTypes) => {
  var Inventory = sequelize.define('Inventory', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Inventory;
};