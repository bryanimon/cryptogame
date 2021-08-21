'use strict';

const GetAllCharacterTypesStep = require('./create_character/get_all_elements_step');

function createCreateCharacterProcess() {
    var block = new GetAllCharacterTypesStep();
    
    return block;
}
module.exports = {
    createCreateCharacterProcess: createCreateCharacterProcess
};