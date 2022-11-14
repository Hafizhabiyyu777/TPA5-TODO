'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'coba',
        password: '123',
        email : "coba@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'hafizh',
        password: '1234',
        email : "hafizh@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
