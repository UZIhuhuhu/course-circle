module.exports = (sequelize, DataTypes) => {
  const Replys = sequelize.define(
    'Replys',
    {
      text: DataTypes.STRING,
      author: DataTypes.STRING,
      commentId: DataTypes.INTEGER,
      following: DataTypes.STRING
    },
    {}
  );
  Replys.associate = function(models) {
    // associations can be defined here
    Replys.belongsTo(models.Comment, {
      foreignKey: 'commentId'
    });
  };
  Replys.sync({ alter: true });
  return Replys;
};
