const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const models = require('../models');
const helper = require('../helper');

const saltRounds = 10;

exports.index = (req, res) => {
  models.user.findAll()
    .then((respon) => {
      res.status(200).json({
        status: 200,
        message: 'success',
        data: respon,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 400,
        message: error,
      });
    });
};

exports.findUserById = (req, res) => {
  const { id } = req.query;
  if (id === undefined) {
    res.status(400).json({
      status: 400,
      message: 'param "id" required',
    });
    return;
  }
  models.user.findOne({
    attributes: [
      'name',
      'password',
      'email',
      'role',
      'token',
      'active',
      'createdAt',
      'updatedAt',
    ],
    where: {
      id,
    },
  }).then((respon) => {
    res.status(200).json({
      status: 200,
      message: 'success',
      data: respon,
    });
  });
};

exports.createOneUser = (req, res) => {
  const {
    name,
    password,
    email,
  } = req.body;
  if (name === undefined) {
    res.status(400).json({
      status: 400,
      message: 'nama required',
    });
    return;
  }
  if (password === undefined) {
    res.status(400).json({
      status: 400,
      message: 'password required',
    });
    return;
  }
  if (email === undefined) {
    res.status(400).json({
      status: 400,
      message: 'email required',
    });
    return;
  }
  models.user.bulkCreate(
    req.body, {
      returning: [
        'id',
        'name',
        'password',
        'email',
        'role',
        'token',
        'active',
        'createdAt',
        'updatedAt',
      ],
    },
  ).then((result) => {
    res.status(200).json({
      status: 200,
      message: 'success',
      data: result,
    });
  });
};

exports.registrasiUser = (req, res) => {
  const { email, password } = req.body;
  if (email === undefined) {
    res.status(400).json({
      status: 400,
      message: 'required email',
    });
    return;
  }
  if (password === undefined) {
    res.status(400).json({
      status: 400,
      message: 'password email',
    });
    return;
  }
  if (!helper.validEmail(email)) {
    res.status(400).json({
      status: 400,
      message: 'please use valid email address',
    });
    return;
  }
  if (!helper.strongPass(password)) {
    res.status(400).json({
      status: 400,
      message: 'please use strong password',
    });
    return;
  }
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (errHash, hash) => {
      models.user.create({
        email,
        password: hash,
        role: 'user',
        active: false,
      }).then((user) => {
        const { role, active, id } = user;
        jwt.sign({
          email, role, active, id,
        }, 'secret_key', (errToken, token) => {
          res.status(200).json({
            id,
            email: user.email,
            role,
            active,
            token,
          });
        });
      })
        .catch((error) => {
          res.status(400).json({
            status: 400,
            message: error.parent.sqlMessage,
          });
        });
    });
  });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  if (email === undefined) {
    res.status(400).json({
      status: 400,
      message: 'email required',
    });
    return;
  }
  if (password === undefined) {
    res.status(400).json({
      status: 400,
      message: 'password required',
    });
    return;
  }
  models.user.findOne({
    attributes: [
      'name',
      'password',
      'email',
      'role',
      'token',
      'active',
      'createdAt',
      'updatedAt',
    ],
    where: {
      email,
    },
  }).then((respon) => {
    const passwordHansed = respon.dataValues.password;
    const { role, active, id } = respon.dataValues;
    bcrypt.compare(password, passwordHansed, (error, respose) => {
      if (!respose || error) {
        res.status(400).json({
          status: 400,
          message: 'wrong password',
        });
        return;
      }
      // create token
      jwt.sign({
        email, role, active, id,
      }, 'secret_key', (err, token) => {
        res.status(200).json({
          status: 200,
          message: 'success',
          data: {
            name: respon.dataValues.name,
            email: respon.dataValues.email,
            role: respon.dataValues.role,
            token,
            expired: '',
            createdAt: respon.dataValues.createdAt,
          },
        });
      });
    });
  }).catch((error) => {
    res.status(400).json({
      status: 400,
      message: error,
    });
  });
};
