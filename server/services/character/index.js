'use strict';

const { body, validationResult } = require('express-validator');
var characterProcessFactory = require('./processes');
const responses = require('../../constants/responses');

async function createCharacter(request, response) {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    response.status(400).json(
      { 
        message: errors.array()[0].msg,
        statusCode: errors.array()[0].statusCode
      }
    );
  } else {
    try {
      var process = characterProcessFactory.createCreateCharacterProcess();
      var context = new Context(request, response);
      await process.execute(context);
      context.response.json(
        { 
          statusCode: responses.loginUserSuccess,
        }
      );
    }
    catch (error) {
      response.status(responses.loginUserFailed);
    }
  }
}

module.exports = {
  createCharacter: createCharacter
};