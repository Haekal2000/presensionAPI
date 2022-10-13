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
      "roles",
      [
        {
          id: "494a52ae-46c9-4903-b60f-8e0b7ee1a438",
          name: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "7e185b73-68be-4ec5-a7e4-2ccb71f33bdc",
          name: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "bc774d8d-13a8-4ba9-bfe7-88ac688efa2d",
          name: "user-faculty",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f440e2ef-4012-4484-98fc-154add18ead7",
          name: "user-department",
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
    await queryInterface.bulkDelete("roles", null, {});
  },
};
