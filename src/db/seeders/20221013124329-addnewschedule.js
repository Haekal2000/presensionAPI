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
          id: "e027878e-22c0-4847-a979-5517a2df5314",
          course_id: "IN210",
          lecturer_nik: "710001",
          academic_period_id: "28104643-57bb-466b-9a68-091f3322c450",
          day: "Selasa",
          hours: "08.00 - 10.00",
          room: "Lab Jaringan Komputer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "025d0c9c-2ea6-4b77-883f-36dfe47555b9",
          course_id: "IN211",
          lecturer_nik: "710003",
          academic_period_id: "b68be57f-c28c-4b46-867a-d92714465eab",
          day: "Senin",
          hours: "01.00 - 15.00",
          room: "Lab Komputer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "18f209bb-b38d-4d44-9f26-fc7a726eba9e",
          course_id: "IN212",
          lecturer_nik: "710004",
          academic_period_id: "c3041736-4975-4579-af04-280e78c5c8f3",
          day: "Jumat",
          hours: "10.00 - 12.00",
          room: "Lab Komputer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a04cb7f8-0961-47b0-bacc-9143b2a95f22",
          course_id: "IN213",
          lecturer_nik: "710071",
          academic_period_id: "d85d7d97-c26b-4fcc-bead-6916cf7a039f",
          day: "Rabu",
          hours: "15.00 - 17.00",
          room: "Lab Komputer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "682b14ab-c53e-4095-82e6-531780784de6",
          course_id: "IN214",
          lecturer_nik: "710096",
          academic_period_id: "ef3a2809-61b1-4750-b11e-91456d4d11ca",
          day: "Rabu",
          hours: "08.00 - 10.00",
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
  },
};
