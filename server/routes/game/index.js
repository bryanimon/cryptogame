'use strict';

const
    express = require('express'),
    userController = require('../../../server/controllers/apis/game/user'),
    characterController = require('../../../server/controllers/apis/game/character');

let router = express.Router();

router.use('/user', userController);
router.use('/character', characterController);

module.exports = router;