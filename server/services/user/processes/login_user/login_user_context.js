'use strict';

const Context = require('../../../../infrastructure/process/context.js');

class LoginUserContext extends Context {
    constructor(request, response) {
        super(request, response);
    }
}

module.exports = LoginUserContext;