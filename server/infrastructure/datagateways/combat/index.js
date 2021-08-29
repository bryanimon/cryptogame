'use strict';

var { MongoClient } = require('mongodb');

async function createCombatSession(session) {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);

  try {
    try {
      await client.connect();
      await client.db('cryptogame').collection('combat_sessions').insertOne(session);
      client.close();
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function createEnemies(enemies) {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);

  try {
    try {
      await client.connect();
      await client.db('cryptogame').collection('enemies').insertMany(enemies);
      client.close();
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function getAllEnemyTypes() {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);

  try {
    try {
      await client.connect();
      const sortConditions = { level: 1 };
      const enemyTypes = await client.db('cryptogame').collection('enemy_types').find({}).sort(sortConditions).toArray();
      client.close();
      return enemyTypes;
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCombatSession: createCombatSession,
  createEnemies: createEnemies,
  getAllEnemyTypes: getAllEnemyTypes
};