'use strict';

const
    express = require('express'),
    userController = require('../../../server/controllers/apis/game/user');

let router = express.Router();

router.use('/user', userController);

module.exports = router;