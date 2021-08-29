'use strict';

const CreateEnemiesStep = require('./generateSingleCharacterCombat/create_enemies_step.js');
const CreateCombatSessionStep = require('./generateSingleCharacterCombat/create_combat_session_step.js');

function createGenerateEnemiesProcess() {
    var block = new CreateEnemiesStep();
    block.setNextBlock(new CreateCombatSessionStep());
    
    return block;
}

module.exports = {
    createGenerateEnemiesProcess: createGenerateEnemiesProcess
};