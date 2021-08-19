'use strict';
var mysql = require('mysql');

function getConnection() {
  if (!connection) {
    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "cryptomage"
    });

    connection.connect(function(err){
      if(!err) {
        console.log('Database is connected!');
      } else {
        console.log('Error connecting database!');
      }
    });
  }
  return connection;
}

module.exports = {
  getConnection: getConnection
};
