'use strict';

var { MongoClient } = require('mongodb');

async function getAllCharacterTypes() {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);

  try {
    await client.connect();
    const characterTypes = await client.db('cryptogame').collection('character_types').find({}).toArray();
    client.close();
    return characterTypes;
  } catch (error) {
    throw error;
  }
}

async function getAllCharactersByUserId(userId) {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);

  try {
    await client.connect();
    const characters = await client.db('cryptogame').collection('characters').find({ ownerId: userId }).toArray();
    client.close();
    return characters;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllCharacterTypes: getAllCharacterTypes,
  getAllCharactersByUserId: getAllCharactersByUserId
};