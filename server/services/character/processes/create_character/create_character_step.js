'use strict';

const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const responses = require('../../../../constants/responses');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

class GenerateRandomCharacter extends ProcessChainBlock {
  async execute(context) {
    try{
      // Random select in array
      // Random select in type
      // Instantiate new character model
      // Assign name
    } catch (error) {
      throw error;
    }
    return await this.executeNext(context);
  }
}

module.exports = GenerateRandomCharacter;