'use strict';

var { MongoClient } = require('mongodb');

async function registerUser(request, userId, passwordHash) {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);
  var user = { username : request.body.username, userId: userId, passwordHash: passwordHash };

  try {
    await client.connect();
    await client.db('cryptogame').collection('users').insertOne(user);
    client.close();
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);

  try {
    await client.connect();
    const user = await client.db('cryptogame').collection('users').findOne({ username: username });
    client.close();

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
    registerUser: registerUser,
    getUserByUsername : getUserByUsername
};