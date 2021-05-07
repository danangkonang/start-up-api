const models = require('../models');

exports.index = (req, res) => {
  models.domain.findAll()
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

exports.createOneDomain = (req, res) => {
  const {
    name,
  } = req.body;
  if (name === undefined) {
    res.status(400).json({
      status: 400,
      message: 'name required',
    });
    return;
  }
  models.domain.create(
    req.body, {
      returning: [
        'id',
        'name',
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
    res.status(200).json({
      status: 200,
      message: error,
    });
  });
};
