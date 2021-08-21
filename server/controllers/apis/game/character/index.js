'use strict';

const express = require('express');
const { body, validationResult } = require('express-validator');
const responses = require('../../../../constants/responses');
const characterService = require('../../../../services/character');

let router = express.Router();

router.post('/create',
  body('userId').isUUID().withMessage(
    {
      message: 'Invalid User Id',
      errorCode: responses.invalidUserId,
    }
  ),
  characterService.createCharacter
);

module.exports = router;