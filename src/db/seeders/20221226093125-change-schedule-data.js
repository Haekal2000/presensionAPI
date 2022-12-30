'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
          method: "teori-praktikum",
          password: "$2a$06$3jtunXq5jzOeBJD/.bShe.hRqq2iu55vyMQNP7GAMZdFlYttrVHpK"
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
          method: "teori-praktikum",
          password: "$2a$06$vMPmNkepa0ejflFindmUVu7S.7olz7Aeheezs2cX7zaWPnRClxjIi"
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
          method: "teori-praktikum",
          password: "$2a$06$5ZYo7k82hRnRQxF8jFsMvuqYRkX4f/pl4TSis3PzJciWyWHwPI0ua"
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
          method: "teori-praktikum",
          password: "$2a$06$jGO7wXyweoT4okeR8AntTejIirQ1ioreBNywiDlG9zuGgQsvDafRW"
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
          method: "teori-praktikum",
          password: "$2a$06$uU5insi62YwunmcjajyUrOhfq5etO/r51r4Mlni5WapXj0SoV/6fW"
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('schedules', [
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
      ], {});
  }
};
