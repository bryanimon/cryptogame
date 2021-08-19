'use strict';

const { body, validationResult } = require('express-validator');
var userProcessFactory = require('./processes');
var RegisterUserContext = require('../../services/user/processes/register_user/register_user_context.js');
var LoginUserContext = require('../../services/user/processes/login_user/login_user_context.js');
const responses = require('../../constants/responses');

async function loginUser(request, response) {
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
      var process = userProcessFactory.createLoginUserProcess();
      var context = new LoginUserContext(request, response);
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

async function registerUser(request, response) {
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
      var process = userProcessFactory.createRegisterUserProcess();
      var context = new RegisterUserContext(request, response);
      await process.execute(context);
      context.response.json(
        {
          statusCode: responses.registerUserSuccess
        }
      );
    }
    catch (error) {
      response.status(responses.registerUserFailed);
    }
  }
}

module.exports = {
    loginUser: loginUser,
    registerUser: registerUser
};