const models = require('../models/index');

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
      res.status(400).send(error);
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
  // console.log(req.body);
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
