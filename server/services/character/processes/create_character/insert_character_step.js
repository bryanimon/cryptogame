'use strict';

const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const responses = require('../../../../constants/responses');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

class InsertCharacterStep extends ProcessChainBlock {
  async execute(context) {
    try{

    } catch (error) {
      throw error;
    }
    return await this.executeNext(context);
  }
}

module.exports = InsertCharacterStep;