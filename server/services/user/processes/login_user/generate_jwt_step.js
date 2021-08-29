'use strict';

const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

class GenerateJwtStep extends ProcessChainBlock {
  async execute(context) {
    try{
      dotenv.config();
      process.env.TOKEN_SECRET = require('crypto').randomBytes(64).toString('hex');

      const token = this.generateAccessToken(context.getProperty('user').username);
      context.setProperty('token', token);
    } catch (error) {
      throw error;
    }
    return await this.executeNext(context);
  }

  generateAccessToken(username) {
    return jwt.sign({'username' : username}, process.env.TOKEN_SECRET,  {expiresIn: '60d'} );
  }
}

module.exports = GenerateJwtStep;