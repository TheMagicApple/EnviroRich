const express = require("express");
const routers = express.Router();

const userRouter = require("./databaseRouters/userRouter.js");

routers.use("/", userRouter);

module.exports = routers;
