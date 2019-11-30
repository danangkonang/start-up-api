'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('JobCategories', [
      {
        name: 'tukang batu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tukang kayu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tukang las',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tukang listrik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tukang pipa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tukang ac',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
