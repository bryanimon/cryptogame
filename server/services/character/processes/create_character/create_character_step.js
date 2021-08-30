'use strict';

const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
const characterDataGateway = require('../../../../infrastructure/datagateways/character');
const traitDataGateway = require('../../../../infrastructure/datagateways/trait');
const elementDataGateway = require('../../../../infrastructure/datagateways/element');
const constants = require('../../../../shared/constants');

class CreateCharacterStep extends ProcessChainBlock {
  async execute(context) {
    try {
      const characterTypes = await characterDataGateway.getAllCharacterTypes();
      const traitTypes = await traitDataGateway.getAllTraitTypes();
      const elementTypes = await elementDataGateway.getAllElementTypes();

      if (characterTypes.length > 0 && elementTypes.length > 0 && elementTypes.length > 0) {
        const selectedCharacterType = characterTypes[this.getRandomNumber(characterTypes.length)];
        const selectedTraitType = traitTypes[this.getRandomNumber(traitTypes.length)];
        const mainElementType = elementTypes[this.getRandomNumber(elementTypes.length)];
        var subElements = [];
        for (let i = 0; i < constants.maxSubElements; i++) {
          const element = elementTypes[this.getRandomNumber(elementTypes.length)];
          subElements.push(element);
        }

        const character = {
          name : `${mainElementType.name} ${selectedCharacterType.name}`,
          characterType: selectedCharacterType,
          elementType : mainElementType,
          subElements : subElements,
          exp : 0,
          dateCreated: new Date(),
          trait: selectedTraitType,
          ownerId : context.request.body.userId 
        };

        context.setProperty('character', character);
      }
    } catch (error) {
      throw error;
    }

    return await this.executeNext(context);
  }

  getRandomNumber(maximum) {
    const min = Math.ceil(0);
    const max = Math.floor(maximum - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = CreateCharacterStep;