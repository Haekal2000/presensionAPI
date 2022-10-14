"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return [
      queryInterface.addColumn("courses", "day", Sequelize.STRING),
      queryInterface.addColumn("courses", "hours", Sequelize.STRING),
      queryInterface.addColumn("courses", "room", Sequelize.STRING),
    ];
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return [
      queryInterface.removeColumn("courses", "day", Sequelize.STRING),
      queryInterface.removeColumn("courses", "hours", Sequelize.STRING),
      queryInterface.removeColumn("courses", "room", Sequelize.STRING),
    ];
  },
};
