'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todos', [
    {
      title: 'Jobdesk',
      desc: 'Mengerjakan TPA 5',
      isCompleated: false,
      deadline : '2022-11-14',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Jobdesk',
      desc: 'Mengerjakan proposal APB',
      isCompleated: false,
      deadline : '2022-11-14',
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
