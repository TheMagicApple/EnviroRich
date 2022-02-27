const express = require("express");
const app = express();

app.set("json spaces", 4);

const routers = require("./routes/routers.js");
app.use("/", routers);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
