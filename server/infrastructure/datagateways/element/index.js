'use strict';

var { MongoClient } = require('mongodb');

async function getAllElementTypes() {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);

  try {
    await client.connect();
    const elements = await client.db('cryptogame').collection('element_types').find({}).toArray();
    client.close();
    return elements;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllElementTypes: getAllElementTypes
};