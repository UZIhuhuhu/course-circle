module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define(
    'Follow',
    {
      nickname: DataTypes.STRING,
      school: DataTypes.STRING,
      following: DataTypes.STRING
    },
    {}
  );
  Follow.associate = function(models) {
    // associations can be defined here
  };
  Follow.sync({ alter: true });
  return Follow;
};
