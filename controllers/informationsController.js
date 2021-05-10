/* eslint-disable camelcase */
const models = require('../models');

exports.index = (req, res) => {
  const {
    page, limit, order, type, domain,
  } = req.query;
  if (page === undefined) {
    res.status(400).json({
      status: 400,
      message: 'param "id" required',
    });
    return;
  }
  if (limit === undefined) {
    res.status(400).json({
      status: 400,
      message: 'param "limit" required',
    });
    return;
  }
  if (order === undefined) {
    res.status(400).json({
      status: 400,
      message: 'param "order" required',
    });
    return;
  }
  if (type === undefined) {
    res.status(400).json({
      status: 400,
      message: 'param "type" required',
    });
    return;
  }
  if (domain === undefined) {
    res.status(400).json({
      status: 400,
      message: 'param "domain" required',
    });
    return;
  }
  models.information.findAll({
    where: {
      type_target: type,
      domain_target: domain,
    },
    order: [
      ['id', order],
    ],
    limit: parseInt(limit),
  })
    .then((respon) => {
      const response = respon.map((item) => ({
        id: item.dataValues.id,
        type_target: item.dataValues.type_target,
        domain_target: item.dataValues.domain_target,
        title: item.dataValues.title,
        description: item.dataValues.description,
        images: item.dataValues.images.split(','),
        link: item.dataValues.link,
        phone: item.dataValues.phone,
        email: item.dataValues.email,
        promo: item.dataValues.promo,
        promo_from: item.dataValues.promo_from,
        promo_to: item.dataValues.promo_to,
        updatedAt: item.dataValues.updatedAt,
        createdAt: item.dataValues.createdAt,
      }));
      res.status(200).json({
        status: 200,
        message: 'success',
        data: response,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 400,
        message: error,
      });
    });
};

exports.createOneInformation = (req, res) => {
  // const {
  //   name,
  //   domain_target,
  // } = req.body;
  // if (name === undefined) {
  //   res.status(400).json({
  //     status: 400,
  //     message: 'name required',
  //   });
  //   return;
  // }
  // if (domain_target === undefined) {
  //   res.status(400).json({
  //     status: 400,
  //     message: 'name required',
  //   });
  //   return; 2020-12-31 17:00:00
  // }
  const nameFile = req.files.map((item) => item.filename);
  const {
    type_target,
    domain_target,
    title,
    description,
    link,
    phone,
    email,
    promo,
    promo_from,
    promo_to,
  } = req.body;
  const data = {
    type_target,
    domain_target,
    title,
    description,
    images: nameFile.toString(),
    link,
    phone,
    email,
    promo,
    promo_from,
    promo_to,
  };
  models.information.create(
    data,
    req.body, {
      returning: [
        'id',
        'name',
        'domain_target',
        'images',
        'createdAt',
        'updatedAt',
      ],
    },
  ).then((result) => {
    res.status(200).json({
      status: 200,
      message: 'success',
      data: {
        id: result.id,
        type_target: result.type_target,
        domain_target: result.domain_target,
        title: result.title,
        description: result.description,
        images: result.images.split(','),
        link: result.link,
        phone: result.phone,
        email: result.email,
        promo: result.promo,
        promo_from: result.promo_from,
        promo_to: result.promo_to,
        updatedAt: result.updatedAt,
        createdAt: result.createdAt,
      },
    });
  }).catch((error) => {
    res.status(400).json({
      status: 400,
      message: error,
    });
  });
};
