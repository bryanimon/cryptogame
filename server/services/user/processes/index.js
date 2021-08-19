'use strict';

const HashPasswordStep = require('./register_user/hash_password_step.js');
const RegisterUserStep = require('./register_user/register_user_step.js');

const GetUserStep = require('./login_user/get_user_step.js');
const ValidatePasswordStep = require('./login_user/validate_password_step.js');
const GenerateJwtStep = require('./login_user/generate_jwt_step.js');

function createRegisterUserProcess() {
    var block = new HashPasswordStep();
    block.setNextBlock(new RegisterUserStep());
    
    return block;
}

function createLoginUserProcess() {
    var block = new GetUserStep();
    block.setNextBlock(new ValidatePasswordStep());
    block.setNextBlock(new GenerateJwtStep());
    return block;
}

module.exports = {
    createRegisterUserProcess: createRegisterUserProcess,
    createLoginUserProcess : createLoginUserProcess
};