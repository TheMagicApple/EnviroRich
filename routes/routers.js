const express = require("express");
const routers = express.Router();

const viewRouter = require("./viewRouters.js");
// const databaseRouter = require("./databaseRouter.js");
// const loginRouter = require("./loginRouter.js");

routers.use("/", viewRouter);
// routers.use("/api/", databaseRouter);
// routers.use("/api/", loginRouter);

module.exports = routers;
