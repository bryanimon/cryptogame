'use strict';

const bcrypt = require('bcrypt');
var ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');

class HashPasswordStep extends ProcessChainBlock {
    async execute(context) {
        const hashedPassword = bcrypt.hashSync(context.request.body.password, 10);
        context.setProperty('hashedPassword', hashedPassword);
        return await this.executeNext(context);
    }
}

module.exports = HashPasswordStep;