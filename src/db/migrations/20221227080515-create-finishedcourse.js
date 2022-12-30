'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('finishedcourses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      student_id: {
        type: Sequelize.STRING,
        references: {
          model: "students",
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
      course_id: {
        type: Sequelize.STRING,
        references: {
          model: "courses",
          key: "id",
        },
      },
      acceptDate: {
        type: Sequelize.DATE
      },
      isPresent: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('finishedcourses');
  }
};