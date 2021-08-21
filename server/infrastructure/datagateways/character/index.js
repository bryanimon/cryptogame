'use strict';

var database = require('../../database');

async function getCharacterTypes() {
  var connection = database.getConnection();
  var sql = `SELECT * FROM character_types`;
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

module.exports = {
  getCharacterTypes: getCharacterTypes,
};