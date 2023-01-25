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
      "departments",
      [
        {
          "id" : "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "name" : "S1 Teknik Informatika",
          "faculty_id" : "10ef5262-22cb-4500-b224-a35d5b5dd403",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
        },
        {
          "id" : "466b6f96-b463-4688-991c-5f78ee3e00e0",
          "name" : "S1 Sistem Informasi",
          "faculty_id" : "10ef5262-22cb-4500-b224-a35d5b5dd403",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
        }
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
     await queryInterface.bulkDelete('departments', null, {});
  },
};
