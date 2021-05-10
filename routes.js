const express = require('express');
require('express-group-routes');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const helper = require('./helper');

const singgle = multer.diskStorage({
  destination: './public/avatar',
  filename(req, file, cb) {
    cb(null, `${helper.stringUnix()}${path.extname(file.originalname)}`);
  },
});

const multyple = multer.diskStorage({
  destination: './public/images',
  filename(req, file, cb) {
    cb(null, `${helper.stringUnix()}${path.extname(file.originalname)}`);
  },
});

const singgleUpload = multer({ storage: singgle });
const multypleUpload = multer({ storage: multyple });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors(
  {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
));

const usersContraller = require('./controllers/userContraller');
const domainsController = require('./controllers/domainsController');
const type = require('./controllers/typeController');
const information = require('./controllers/informationsController');
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

// app.get('/', (req, res) => res.json({ message: 'Hello rest api danang konang' }));
app.get('/', (req, res) => res.json({ message: helper.stringUnix() }));
app.group('/api/v1', (router) => {
  router.get('/', (req, res) => res.json({ message: 'Hello rest api danang konang' }));
  // router.get('/tes', (req, res) => response(res, 200, 'success', {}));
  router.get('/tes', usersContraller.index);
  // router.get('/users', auth, usersContraller.index);
  router.get('/users', usersContraller.index);
  router.get('/user', usersContraller.findUserById);
  router.post('/user', usersContraller.createOneUser);
  // router.get('/job-categori', controllerJobCategorie.index);
  router.post('/upload', singgleUpload.single('avatar'), (req, res) => {
    console.log(req.file);
    console.log(req.body.title);
    res.json({ message: 'Hello rest api danang konang' });
  });
  router.post('/uploads', multypleUpload.array('avatar', 5), (req, res) => {
    console.log(req.file);
    console.log(req.body.title);
    res.json({ message: 'Hello rest api danang konang' });
  });
  router.post('/singup', usersContraller.registrasiUser);
  router.post('/login', usersContraller.loginUser);

  /* Domain */
  router.get('/domains', domainsController.index);
  router.post('/domain', domainsController.createOneDomain);

  /* Type */
  router.get('/types', type.index);
  router.post('/type', type.createOneType);

  /* Information */
  router.get('/informations', information.index);
  router.post('/information', multypleUpload.array('avatar', 5), information.createOneInformation);
});

module.exports = app;
