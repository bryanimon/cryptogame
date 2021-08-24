'use strict';

const CreateCharacterStep = require('./create_character/create_character_step');
const InsertCharacterStep = require('./create_character/insert_character_step');

function createCreateCharacterProcess() {
    var block = new CreateCharacterStep();

    block.setNextBlock(new InsertCharacterStep());
    return block;
}
module.exports = {
    createCreateCharacterProcess: createCreateCharacterProcess
};