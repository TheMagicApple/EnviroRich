const express = require("express");
const routers = express.Router();

const viewRouter = require("./viewRouters.js");
const authenticationRouter = require("./authenticationRouter.js");

routers.use("/", viewRouter);
routers.use("/api/", authenticationRouter);

module.exports = routers;
