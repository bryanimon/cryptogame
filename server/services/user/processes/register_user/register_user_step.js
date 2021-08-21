'use strict';

const { v4: uuidv4 } = require('uuid');
const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const userDataGateway = require('../../../../infrastructure/datagateways/user');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

class RegisterStep extends ProcessChainBlock {
  async execute(context) {
    const userId = uuidv4();
    context.setProperty('userId', userId);
    try{
      await userDataGateway.registerUser(context.request, userId, context.getProperty('hashedPassword'));
    } catch (error) {
      throw error;
    }

    return await this.executeNext(context);
  }
}

module.exports = RegisterStep;