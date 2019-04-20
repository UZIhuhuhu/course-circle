module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Follows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      following: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      commentId: {
        type: Sequelize.INTEGER
      }
    }),
  down: queryInterface => queryInterface.dropTable('Follows')
};
