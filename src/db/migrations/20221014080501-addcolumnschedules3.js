"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn(
        "schedules",
        "academicperiodId",
        Sequelize.STRING
      ),
      queryInterface.removeColumn("schedules", "courseId", Sequelize.STRING),
      queryInterface.removeColumn("schedules", "lecturerId", Sequelize.STRING),
    ]);
  },
};
