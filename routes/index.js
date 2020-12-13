const express = require('express');
const router = express.Router();
const apiRouterUser = require('./api/users.js');

router.use('/auth', apiRouterUser);

module.exports = router;
