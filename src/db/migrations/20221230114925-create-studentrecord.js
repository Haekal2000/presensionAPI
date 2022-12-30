'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentrecords', {
      id: {
        allowNull: false,
        autoIncrement: false,
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
      acceptDate: {
        type: Sequelize.DATE
      },
      isPresent: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('studentrecords');
  }
};