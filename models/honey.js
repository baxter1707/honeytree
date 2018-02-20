'use strict';
module.exports = (sequelize, DataTypes) => {
  var honey = sequelize.define('honey', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    type: DataTypes.STRING
  }, {});
  return honey;
};
