'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schedulerecords', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      lecturer_nik: {
        type: Sequelize.STRING,
        references: {
          model: "lecturers",
          key: "nik",
        },
      },
      course_id: {
        type: Sequelize.STRING,
        references: {
          model: "courses",
          key: "id",
        },
      },
      schedule_id: {
        type: Sequelize.STRING,
        references: {
          model: "schedules",
          key: "id",
        },
      },
      isComplete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schedulerecords');
  }
};