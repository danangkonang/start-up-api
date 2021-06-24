const router = require('express').Router();
const userContraller = require('../controllers/user_contraller');
const auth = require('./auth');

router.get('/users', auth, userContraller.index);
router.post('/registrasi', userContraller.registrasiUser);
router.post('/login', userContraller.loginUser);

module.exports = router;