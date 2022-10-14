'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return Promise.all([
      queryInterface.removeColumn("courses", "day", Sequelize.STRING),
      queryInterface.removeColumn("courses", "hours", Sequelize.STRING),
      queryInterface.removeColumn("courses", "room", Sequelize.STRING),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return Promise.all([
      queryInterface.removeColumn("courses", "day", Sequelize.STRING),
      queryInterface.removeColumn("courses", "hours", Sequelize.STRING),
      queryInterface.removeColumn("courses", "room", Sequelize.STRING),
    ]);
  }
};
