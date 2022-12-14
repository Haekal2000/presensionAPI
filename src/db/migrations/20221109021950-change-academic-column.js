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
    //  await queryInterface.addColumn('students', 'academic_period_id', {
    //   type: Sequelize.STRING,
    //   references: {
    //     model: "academicperiods",
    //     key: "id",
    //   },
    // });
     await queryInterface.changeColumn('students', 'academic_period_id', {
      type: Sequelize.STRING,
      references: {
        model: "academicperiods",
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
     await queryInterface.removeColumn('students', 'academic_period_id');
  }
};
