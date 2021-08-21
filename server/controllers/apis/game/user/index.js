'use strict';

const express = require('express');
const { body, validationResult } = require('express-validator');
const responses = require('../../../../constants/responses');
const userService = require('../../../../services/user');
const userDataGateway = require('../../../../infrastructure/datagateways/user');

let router = express.Router();

router.post('/login',
  body('username').isEmail().withMessage(
    {
      message: 'Invalid Email',
      errorCode: responses.invalidEmail,
    }
  ),
  userService.loginUser
);

router.post(
    '/register', 
    body('username').isEmail().withMessage(
      {
        message: 'Invalid Email',
        errorCode: responses.invalidEmail,
      }
    ),
    body('username').custom(async value => {
      const user = await userDataGateway.getUserByUsername(value);
      if (user) {
        return Promise.reject();
      }
    }).withMessage(
      {
        message: 'Email already in use',
        errorCode: responses.emailAlreadyUsed,
      }
    ),
    body('password').isLength({ min: 8 })
    .withMessage(
      {
        message: 'Invalid Password',
        errorCode: responses.invalidPassword,
      }
    ),
    userService.registerUser
);

module.exports = router;