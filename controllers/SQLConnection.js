const mysql = require("mysql");

require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER_NM,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

connection.connect(function (err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log(`Connected to MySQL database on thread ${connection.threadId}`);
});

module.exports = connection;
