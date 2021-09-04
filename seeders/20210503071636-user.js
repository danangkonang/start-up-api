/* eslint-disable no-unused-vars */

const fake_user = [...Array(1)].map((ft, x) => (
  {
    name: 'super admin',
    // // testing123
    password: '$2b$10$l43yx8k1PmO52ltWbESyVOdZ/xvk0RMbOuevytfMykdK/9qE9oDQm',
    email: 'admin@email.com',
    role: 'admin',
    token: null,
    is_active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
));

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', fake_user),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
