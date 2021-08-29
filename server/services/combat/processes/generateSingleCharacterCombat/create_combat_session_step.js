'use strict';

const { v4: uuidv4 } = require('uuid');
const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const combatDataGateway = require('../../../../infrastructure/datagateways/combat');

class CreateCombatSessionStep extends ProcessChainBlock {
  async execute(context) {
    try {
      const combatId = uuidv4();
      console.log('asdsa');
      const enemies = context.getProperty('enemies');
      
      const combatSession = {
        userId : context.request.body.userId,
        timeStarted: new Date(),
        combatId : combatId,
        type : 1,
        enemies : enemies
      };

      await combatDataGateway.createCombatSession(combatSession);
    } catch (error) {
      throw error;
    }
    return this.executeNext(context);
  }
}

module.exports = CreateCombatSessionStep;