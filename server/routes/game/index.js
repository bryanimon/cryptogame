'use strict';

const
    express = require('express'),
    userController = require('../../../server/controllers/apis/game/user'),
    characterController = require('../../../server/controllers/apis/game/character'),
    combatController = require('../../../server/controllers/apis/game/combat');

let router = express.Router();

router.use('/user', userController);
router.use('/character', characterController);
router.use('/combat', combatController);

module.exports = router;