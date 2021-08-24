'use strict';

const { body, validationResult } = require('express-validator');
var characterProcessFactory = require('./processes');
const responses = require('../../shared/responses');
const Context = require('../../infrastructure/process/context');
const characterDataGateway = require('../../infrastructure/datagateways/character');

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
      context.response.json({ 
          data : {
            character: context.getProperty('character')
          },
          statusCode: responses.insertCharacterSuccess,
        }
      );
    }
    catch (error) {
      response.status(responses.loginUserFailed);
    }
  }
}

async function getCharactersByUserId(request, response) {
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
      var characters = await characterDataGateway.getAllCharactersByUserId(request.query.userId);
      response.json({ 
          data : {
            characters: characters
          },
          statusCode: responses.getCharacterByUserIdSuccess,
        }
      );
    }
    catch (error) {
      response.status(responses.getCharacterByUserIdFailed);
    }
  }
}

module.exports = {
  createCharacter: createCharacter,
  getCharactersByUserId: getCharactersByUserId,
};