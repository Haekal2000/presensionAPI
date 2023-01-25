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
    await queryInterface.removeColumn("schedulerecords", "studentrecord_id");
    await queryInterface.addColumn("studentrecords", "schedulerecord_id", {
      type: Sequelize.STRING,
      references: {
        model: "studentrecords",
        key: "id",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("schedulerecords", "studentrecord_id");
    await queryInterface.removeColumn("studentrecords", "schedulerecord_id");
  }
};
