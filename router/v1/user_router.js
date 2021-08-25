const router = require('express').Router();
const user = require('../../controllers/user_contraller');
const auth = require('../../midleware');

router.get('/users', auth, user.index);
router.post('/registrasi', user.registrasiUser);
router.post('/login', user.loginUser);

module.exports = router;