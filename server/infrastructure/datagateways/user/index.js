'use strict';

var database = require('../../database');

function loginUser(req, res) {
    res.json("login");
}

async function registerUser(request, userId, passwordHash) {
  var connection = database.getConnection();
  var sql = `INSERT INTO users (id, username, password) VALUES ('${userId}', '${request.body.username}', '${passwordHash}')`;
  connection.query(sql, 
    (err, result) => {
      if (err) {
        throw err;
      } else {
        return result;
      }
    }
  );
}

async function getUserByUsername(username) {
  return new Promise(
    (resolve, reject) => {
      var connection = database.getConnection();
      var sql = `SELECT * FROM users WHERE username = '${username}' LIMIT 1`;
      connection.query(sql, function (error, result) {
          if (error) {
            reject(error)
          } else {
            resolve(result[0]);
          }
        }
      );
    }
  );
}

module.exports = {
    loginUser: loginUser,
    registerUser: registerUser,
    getUserByUsername : getUserByUsername
};