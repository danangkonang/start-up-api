/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      name: 'super admin',
      password: '$2b$10$l43yx8k1PmO52ltWbESyVOdZ/xvk0RMbOuevytfMykdK/9qE9oDQm',
      email: '23paskal@email.com',
      role: 'superadmin',
      token: null,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
