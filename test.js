// const bcrypt = require('bcrypt');
require('dotenv').config();
// const saltRounds = 10;

// const createPass = (pass) => {
//   bcrypt.genSalt(saltRounds, (err, salt) => {
//     bcrypt.hash(pass, salt, (errHash, hash) => {
//       console.log(errHash);
//       console.log(hash);
//     });
//   });
// };
// createPass('pass');

console.log(process.env);
