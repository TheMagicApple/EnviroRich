const axios = require("axios");

const cookieParser = require("cookie-parser");
const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(cookieParser());

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const response = await axios.get(
    `http://incidium.tech/api/users/user?username=${username}&password=${password}`
  );
  console.log(response);
  if (response == null) return;

  res.cookie("username", username);
  res.cookie("password", password);

  res.status(200).send("Cookies sent");
});

router.post("/logout", (req, res) => {
  res.clearCookie("username");
  res.clearCookie("password");
});

router.get("/login/info", (req, res) => {
  console.log(req.cookies);
  res.json({ username: req.cookies.username });
});

module.exports = router;
