'use strict';

const express = require('express');
const { body, param, validationResult } = require('express-validator');
const responses = require('../../../../shared/responses');
const combatService = require('../../../../services/combat');

let router = express.Router();

router.post('/create',
  body('userId').isUUID().withMessage(
    {
      message: 'Invalid User Id',
      errorCode: responses.invalidUserId,
    }
  ),
  combatService.generateEnemies
);

module.exports = router;