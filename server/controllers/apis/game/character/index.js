'use strict';

const express = require('express');
const { body, param, validationResult } = require('express-validator');
const responses = require('../../../../shared/responses');
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

router.get('/characters',

  characterService.getCharactersByUserId
);

module.exports = router;