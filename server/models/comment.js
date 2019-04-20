module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      text: DataTypes.STRING,
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      following: DataTypes.STRING,
      commentId: DataTypes.INTEGER
    },
    {}
  );
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.hasMany(models.Replys, { foreignKey: 'commentId' });
  };
  Comment.sync({ alter: true });
  return Comment;
};
