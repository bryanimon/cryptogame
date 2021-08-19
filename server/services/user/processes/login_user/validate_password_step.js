'use strict';

const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const responses = require('../../../../constants/responses');
const bcrypt = require('bcrypt');

class ValidatePasswordStep extends ProcessChainBlock {
  async execute(context) {
    try {
      var user = context.getProperty('user');
      if (!bcrypt.compareSync(context.request.body.password, user.password)) {
        context.response.status(400).json({message: { errorCode: responses.incorrectCredentials }});
      }
    } catch (error) {
      throw error;
    }
    return await this.executeNext(context);
  }
}

module.exports = ValidatePasswordStep;