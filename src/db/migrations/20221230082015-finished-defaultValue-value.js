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
    await queryInterface.changeColumn('finishedcourses', 'isPresent', { type: Sequelize.BOOLEAN, defaultValue: false });
    await queryInterface.changeColumn('finishedcourses', 'isDone', { type: Sequelize.BOOLEAN, defaultValue: false });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('finishedcourses', 'isPresent');
    await queryInterface.removeColumn('finishedcourses', 'isDone');
  }
};
