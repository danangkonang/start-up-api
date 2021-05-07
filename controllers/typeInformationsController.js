/* eslint-disable camelcase */
const models = require('../models');

exports.index = (req, res) => {
  models.type_information.findAll()
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

exports.createOneType = (req, res) => {
  const {
    name,
    domain_target,
  } = req.body;
  if (name === undefined) {
    res.status(400).json({
      status: 400,
      message: 'name required',
    });
    return;
  }
  if (domain_target === undefined) {
    res.status(400).json({
      status: 400,
      message: 'name required',
    });
    return;
  }
  models.type_information.create(
    req.body, {
      returning: [
        'id',
        'name',
        'domain_target',
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
  }).catch((error) => {
    res.status(400).json({
      status: 400,
      message: error,
    });
  });
};
