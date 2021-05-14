// function strongPass(pass) {
//   return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(pass);
// }

// console.log(strongPass('qwert@A2'));

console.log(process.env.HOME);

const Sequelize = require('sequelize');

const sequelize = new Sequelize('dua_tiga_paskal', 'dananguser', 'danangpass', {
  host: 'danang-mysql-app',
  dialect: 'mysql',
});
console.log(sequelize);
