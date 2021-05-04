const express = require('express');
require('express-group-routes');

const app = express();
const parser = require('body-parser');

app.use(parser.json());

const usersContraller = require('./controllers/userContraller');
// const controllerJobCategorie = require('./controllers/JobCategorie');

// const auth = (req, res, next) => {
//   const bearerHeader = req.headers.authorization;
//   if (typeof bearerHeader !== 'undefined') {
//     const bearer = bearerHeader.split(' ');
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res.sendStatus(404);
//   }
// };

// function response(res, status, message, data) {
//   res.json({ status, message, data });
// }
app.get('/', (req, res) => res.json({ message: 'Hello rest api danang konang' }));
app.group('/api/v1', (router) => {
  router.get('/', (req, res) => res.json({ message: 'Hello rest api danang konang' }));
  // router.get('/tes', (req, res) => response(res, 200, 'success', {}));
  router.get('/tes', usersContraller.index);
  // router.get('/users', auth, usersContraller.index);
  router.get('/users', usersContraller.index);
  router.get('/user', usersContraller.findUserById);
  router.post('/user', usersContraller.createOneUser);
  // router.get('/job-categori', controllerJobCategorie.index);
});

module.exports = app;
