const SQLConnection = require("./SQLConnection.js");

async function addUser(username, password) {
  const queryString = `INSERT INTO users (username, password, date_created) VALUES ("${username}", "${password}", CURRENT_TIMESTAMP())`;
  const result = await SQLConnection.query(queryString).catch((err) => {
    throw err;
  });
  return result;
}

async function deleteUser(username) {
  const queryString = `DELETE FROM users WHERE username = ${username}`;
  const result = await SQLConnection.query(queryString).catch((err) => {
    throw err;
  });
  return result;
}

async function getUsers() {
  const queryString = `SELECT username, date_created FROM users`;
  const result = await SQLConnection.query(queryString).catch((err) => {
    throw err;
  });
  return result;
}

async function getUser(username, password) {
  const queryString = `SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`;
  let result;
  result = await SQLConnection.query(queryString).catch((err) => {
    result = null;
  });
  return result;
}

module.exports = {
  addUser,
  deleteUser,
  getUsers,
  getUser,
};
