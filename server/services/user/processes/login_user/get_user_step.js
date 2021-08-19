'use strict';

const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const userDataGateway = require('../../../../infrastructure/datagateways/user');
const responses = require('../../../../constants/responses');

class GetUserStep extends ProcessChainBlock {
  async execute(context) {
    try{
      var user = await userDataGateway.getUserByUsername(context.request.body.username);

      if (user) {
        context.setProperty('user', user);
      } else {
        context.response.json({message :{ statusCode: responses.userNotFound }});
      }
    } catch (error) {
      throw error;
    }
    return await this.executeNext(context);
  }
}

module.exports = GetUserStep;