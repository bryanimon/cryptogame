'use strict';

const Context = require('../../../../infrastructure/process/context.js');

class RegisterUserContext extends Context {
    constructor(request, response) {
        super(request, response);
    }
}

module.exports = RegisterUserContext;