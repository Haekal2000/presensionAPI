'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schedules', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      course_id: {
        type: Sequelize.STRING,
        references: {
          model: "courses",
          key: "id",
        },
      },
      lecturer_nik: {
        type: Sequelize.STRING,
        references: {
          model: "lecturers",
          key: "nik",
        },
      },
      academic_period_id: {
        type: Sequelize.STRING,
        references: {
          model: "academicperiods",
          key: "id",
        },
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
    await queryInterface.dropTable('schedules');
  }
};