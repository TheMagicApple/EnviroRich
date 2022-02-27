/**
 * Code originally by Serigo Tapia-Fikes
 * Code tooken from https://medium.com/fullstackwebdev/a-guide-to-mysql-with-node-js-fc4f6abce33b
 */
const mysql = require("mysql");
const util = require("util");

require("dotenv").config();
var connection;

connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER_NM,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});
// promise wrapper to enable async await with MYSQL
connection.query = util.promisify(connection.query).bind(connection);

// connect to the database
connection.connect(function (err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log(`connected to mysql database on thread ${connection.threadid}`);
});

module.exports = connection;
