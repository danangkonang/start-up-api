const router = require('express').Router();

router.use(require('./user_router'));
// router.use(require('./content_router'));

module.exports = router;