'use strict';

const { body, validationResult } = require('express-validator');
var combatProcessFactory = require('./processes');
const responses = require('../../shared/responses');
const Context = require('../../infrastructure/process/context');

async function generateEnemies(request, response) {
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
      var process = combatProcessFactory.createGenerateEnemiesProcess();
      var context = new Context(request, response);
      await process.execute(context);
      context.response.json(
        { 
          statusCode: responses.loginUserSuccess,
          data : {
            token : context.getProperty('token')
          }
        }
      );
    }
    catch (error) {
      response.status(responses.loginUserFailed);
    }
  }
}

module.exports = {
    generateEnemies: generateEnemies
};