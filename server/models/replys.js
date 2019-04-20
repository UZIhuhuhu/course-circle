'use strict';
module.exports = (sequelize, DataTypes) => {
  const Replys = sequelize.define(
    'Replys',
    {
      text: DataTypes.STRING,
      author: DataTypes.STRING
    },
    {}
  );
  Replys.associate = function(models) {
    // associations can be defined here
    // Replys.hasMany(models.Comment);
  };
  Replys.sync({ alter: true });
  return Replys;
};
