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
      queryInterface.removeColumn("schedules", "day", Sequelize.STRING),
      queryInterface.removeColumn("schedules", "hours", Sequelize.STRING),
      queryInterface.removeColumn("schedules", "room", Sequelize.STRING),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('schedules');
     return Promise.all([
      queryInterface.removeColumn("schedules", "academicperiodId", Sequelize.STRING),
      queryInterface.removeColumn("schedules", "courseId", Sequelize.STRING),
      queryInterface.removeColumn("schedules", "lecturerId", Sequelize.STRING),
    ]);
  }
};
