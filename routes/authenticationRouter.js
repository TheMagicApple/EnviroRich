const express = require("express");
const passport = require("passport");
const connection = require("../controllers/SQLConnection.js");
const router = express.Router();

const authenticate = require("../controllers/authenticate.js");

router.use(express.json());
router.use(passport.initialize());
router.use(passport.session());

passport.use(authenticate.createStrategy());
passport.serializeUser(authenticate.serializeUser);
passport.deserializeUser(authenticate.deserializeUser);

router.get("/logout", (req, res) => {
  req.logout();
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login?value=fail",
    successRedirect: "/loggedin",
  })
);

router.post("/signup", authenticate.userExists, (req, res) => {
  console.log(req.body);
  const saltHash = authenticate.saltAndHashPassword(req.body.password);
  console.log(saltHash);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  connection.query(
    `INSERT INTO user(username, hash, salt) values('${req.body.username}', '${hash}', '${salt}')`,
    (error, result, fields) => {
      if (error) console.log(error);
      else console.log("Successfully Signed up");
    }
  );

  res.redirect("/login");
});

module.exports = router;
