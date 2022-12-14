"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "schedules",
      [
        {
          id: "c84a21ec-43dd-4277-aaaf-d86b1ce7a542",
          course_id: "IN220",
          lecturer_nik: "730009",
          academic_period_id: "28104643-57bb-466b-9a68-091f3322c450",
          day: "Senin",
          hours: "08.00 - 10.00",
          room: "Lab Komputer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "b1d4c866-5f5b-4f2a-ae43-ab9773c00e2f",
          course_id: "IN216",
          lecturer_nik: "720001",
          academic_period_id: "28104643-57bb-466b-9a68-091f3322c450",
          day: "Kamis",
          hours: "15.00 - 17.00",
          room: "Lab Komputer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "8e86458c-37b4-45e0-844e-610d088f28aa",
          course_id: "IN224",
          lecturer_nik: "720211",
          academic_period_id: "28104643-57bb-466b-9a68-091f3322c450",
          day: "Jumat",
          hours: "10.00 - 12.00",
          room: "Lab Komputer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('schedules', null, {});
  },
};
