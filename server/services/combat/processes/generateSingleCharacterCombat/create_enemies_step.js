'use strict';

const { v4: uuidv4 } = require('uuid');
const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const combatDataGateway = require('../../../../infrastructure/datagateways/combat');

class CreateEnemiesStep extends ProcessChainBlock {
  async execute(context) {
    try {
      const enemyTypes = await combatDataGateway.getAllEnemyTypes();
      context.setProperty('enemies', { name: "Slime" });
    } catch (error) {
      throw error;
    }
    return this.executeNext(context);
  }
}

module.exports = CreateEnemiesStep;