'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comments',
    {
      text: DataTypes.STRING,
      title: DataTypes.STRING,
      author: DataTypes.STRING
    },
    {}
  );
  Comment.associate = function(models) {
    // associations can be defined here
    // Comment.belongsTo(models.Reply, {
    //   onDelete: 'NULL',
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
  };
  Comment.sync({ alter: true });
  return Comment;
};
