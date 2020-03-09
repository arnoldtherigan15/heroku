'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    national_number: DataTypes.INTEGER,
    evolution: DataTypes.STRING,
    animated: DataTypes.STRING,
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER
  }, {});
  Pokemon.associate = function(models) {
    // associations can be defined here
  };
  return Pokemon;
};