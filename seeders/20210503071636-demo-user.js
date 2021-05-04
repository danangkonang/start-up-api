/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      name: 'John',
      password: 'Doe',
      email: 'example@example.com',
      role: null,
      token: null,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'John',
      password: 'Doe',
      email: 'example@example.com',
      role: null,
      token: null,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'mark',
      password: 'Doe',
      email: 'example@example.com',
      role: null,
      token: null,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'pretie',
      password: 'Doe',
      email: 'example@example.com',
      role: null,
      token: null,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
