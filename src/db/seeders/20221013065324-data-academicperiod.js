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
      "academicperiods",
      [
        {
          id: "f84ecfdb-06ca-4db0-b33c-1c503a6b9e85",
          name: "Ganjil 2021/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "c3041736-4975-4579-af04-280e78c5c8f3",
          name: "Genap 2021/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "b68be57f-c28c-4b46-867a-d92714465eab",
          name: "Antara 2021/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ef3a2809-61b1-4750-b11e-91456d4d11ca",
          name: "Ganjil 2022/2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d85d7d97-c26b-4fcc-bead-6916cf7a039f",
          name: "Genap 2022/2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "28104643-57bb-466b-9a68-091f3322c450",
          name: "Antara 2022/2023",
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
     * await queryInterface.bulkDelete('People', new Date(), {});
     */
    await queryInterface.bulkDelete("academicperiods", null, {});
  },
};
