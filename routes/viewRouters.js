const express = require("express");
const path = require("path");
const router = express.Router();
const viewsPath = path.join(__dirname, "../views");

router.use(express.static(path.join(__dirname, "../public")));

router.get("/", (req, res) => {
  res.sendFile(path.join(viewsPath, "/index.html"));
});

router.get("/results", (req, res) => {
  res.sendFile(path.join(viewsPath, "/results.html"));
});

router.get("/selectThings", (req, res) => {
  res.sendFile(path.join(viewsPath, "/selectThings.html"));
});

module.exports = router;
