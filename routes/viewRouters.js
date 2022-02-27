const express = require("express");
const path = require("path");
const { ensureLoggedIn } = require("connect-ensure-login");
const router = express.Router();
const viewsPath = path.join(__dirname, "../views");

router.use(express.static(path.join(__dirname, "../public")));
router.get("/", (req, res) => {
  // console.log(req);
  // console.log(req.user);
  res.sendFile(path.join(viewsPath, "/index.html"));
});

router.get("/results", (req, res) => {
  res.sendFile(path.join(viewsPath, "/results.html"));
});

router.get("/selectThings", (req, res) => {
  res.sendFile(path.join(viewsPath, "/selectThings.html"));
});

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(viewsPath, "/dashboard.html"));
});

router.get("/loggedin", ensureLoggedIn("/"), (req, res) => {
  res.sendFile(path.join(viewsPath, "/loggedin.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(viewsPath, "/login.html"));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.join(viewsPath, "/signup.html"));
});
router.get("/claim", (req, res) => {
  res.sendFile(path.join(viewsPath, "/claim.html"));
});

module.exports = router;
