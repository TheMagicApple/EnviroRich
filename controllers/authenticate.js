const LocalStrategy = require("passport-local").Strategy;
const connection = require("./SQLConnection.js");
const crypto = require("crypto");

function createStrategy() {
  return new LocalStrategy((username, password, done) => {
    connection.query(
      `SELECT * FROM user WHERE username = '${username}'`,
      (error, results, fields) => {
        if (error) return done(error);

        if (results.length == 0) return done(null, false);

        const passwordIsValid = verifyPassword(
          password,
          results[0].hash,
          results[0].salt
        );

        const user = {
          id: results[0].id,
          username: results[0].username,
          hash: results[0].hash,
          salt: results[0].sal,
        };

        if (passwordIsValid) return done(null, user);
        else return done(null, false);
      }
    );
  });
}

function verifyPassword(password, hash, salt) {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 60, "sha512")
    .toString("hex");
  return hash === hashVerify;
}

function saltAndHashPassword(password) {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 60, "sha512")
    .toString("hex");

  return {
    salt,
    hash,
  };
}

function userExists(req, res, next) {
  console.log(req.body);
  connection.query(
    `Select * from user where username="${req.body.username || ""}"`,
    (error, results, fields) => {
      if (error) console.log(error);
      else if (results.length > 0) res.redirect("/signup");
      else next();
    }
  );
}

function serializeUser(user, done) {
  done(null, user.username);
}

function deserializeUser(userId, done) {
  connection.query(
    `SELECT * FROM user WHERE username = '${userId}'`,
    (error, results) => {
      if (error) console.log(error);
      done(null, results[0]);
    }
  );
}

module.exports = {
  createStrategy,
  saltAndHashPassword,
  userExists,
  serializeUser,
  deserializeUser,
};
