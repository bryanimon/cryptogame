'use strict';

const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const characterDataGateway = require('../../../../infrastructure/datagateways/character');

class GetAllCharacterTypesStep extends ProcessChainBlock {
  async execute(context) {
    try{
        var characters = characterDataGateway.getCharacterTypes();
    } catch (error) {
      throw error;
    }
    return await this.executeNext(context);
  }
}

module.exports = InsertCharacterStep;