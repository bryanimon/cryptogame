'use strict';

const ProcessChainBlock = require('../../../../infrastructure/process/process_chain_block.js');
var { MongoClient } = require('mongodb');

class InsertCharacterStep extends ProcessChainBlock {
  async execute(context) {
    const client = new MongoClient(process.env.DB_CONNECTION_STRING);
  
    try {
      await client.connect();
      await client.db('cryptogame').collection('characters').insertOne(context.getProperty('character'));
      client.close();
    } catch (error) {
      throw error;
    }
    
    return await this.executeNext(context);
  }
}

module.exports = InsertCharacterStep;