const express = require('express');
require('express-group-routes');
const jwt = require('jsonwebtoken');

const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const helper = require('./helper');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors(
  {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
));
const port = 9000;

const usersContraller = require('./controllers/userContraller');
const domainsController = require('./controllers/domainsController');
const type = require('./controllers/typeController');
const information = require('./controllers/informationsController');

const multyple = multer.diskStorage({
  destination: './public/images',
  filename(req, file, cb) {
    cb(null, `${helper.stringUnix()}${path.extname(file.originalname)}`);
  },
});
const multypleUpload = multer({ storage: multyple });

const mddWare = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    if (bearerToken === undefined) {
      res.status(401).json({
        status: 401,
        message: 'Unauthorized',
      });
      return;
    }
    jwt.verify(bearerToken, 'secret_key', (err, decoded) => {
      if (err) {
        res.status(401).json({
          status: 401,
          message: 'token expired or jwt malformed',
        });
        return;
      }
      // console.log(decoded.email); // bar
      next();
    });
  } else {
    res.status(401).json({
      status: 401,
      message: 'Unauthorized',
    });
  }
};

app.get('/', (req, res) => {
  res.json({ message: 'hellow word' });
});

app.group('/v1', (router) => {
  router.get('/', (req, res) => res.json({
    message: 'Hello rest api 23 paskal',
  }));

  /* auth */
  router.post('/singup', usersContraller.registrasiUser);
  router.post('/login', usersContraller.loginUser);

  /* user */
  router.get('/users', mddWare, usersContraller.index);

  /* Domain */
  router.get('/domains', mddWare, domainsController.index);
  router.post('/domain', mddWare, domainsController.createOneDomain);

  /* Type */
  router.get('/types', mddWare, type.index);
  router.post('/type', mddWare, type.createOneType);

  /* Information */
  router.get('/informations', information.index);
  router.post('/information', mddWare, multypleUpload.array('avatar', 5), information.createOneInformation);
});

// app.use(express.urlencoded({
//   extended: true,
// }));

app.listen(port, () => {
  console.log(`this app listening at http://localhost:${port}`);
});
