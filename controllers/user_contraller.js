const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const models = require('../models');
const helper = require('../helper');
const saltRounds = 10;

exports.registrasiUser = async (req, res) => {
  const { email, password } = req.body;
  if (!helper.strongPass(password)) {
    res.status(400).json({
      status: 400,
      message: 'please use strong password',
    });
    return;
  }
  try {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, async (errHash, hash) => {
        let user_count = await  models.user.count({
          where: {
            email,
          },
        });
        if (user_count > 0) {
          return res.status(500).json({
            status: 500,
            message: 'Duplicate Email',
          });
        }
        let user_respon = await  models.user.create({
          email,
          password: hash,
          role: 'user',
          active: false,
        });
        jwt.sign({
          id: user_respon.id,
        }, process.env.SECRET_KEY, { expiresIn: 60 * 60 }, (err, token) => {
          if (err) {
            return res.status(500).json({
              status: 500,
              message: 'Internal Server Error',
            });
          }
          res.status(200).json({
            status: 200,
            message: 'success',
            data: createResponse(user_respon, token)
          });
        });
      });
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user_respon = await  models.user.findOne({
      where: {
        email,
      },
    });
    if (user_respon === null) {
      return res.status(400).json({
        status: 400,
        message: 'Email Not Found',
      });
    }
    bcrypt.compare(password, user_respon.password, (error, ok) => {
      console.log(error);
      console.log(ok);
      if (!ok || error) {
        res.status(400).json({
          status: 400,
          message: 'wrong Password',
        });
        return;
      }
      jwt.sign({
        id: user_respon.id,
      }, process.env.SECRET_KEY, { expiresIn: 60 * 60 }, (err, token) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
          });
        }
        res.status(200).json({
          status: 200,
          message: 'success',
          data: createResponse(user_respon, token)
        });
      });
    })
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
  
  
};

const createResponse = (data, token) => {
  return {
    name: data.name,
    email: data.email,
    role: data.role,
    token,
    expired: 60 * 60,
    createdAt: data.createdAt,
  }
};
