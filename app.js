const express = require("express");
const session = require("express-session");
const app = express();

app.set("json spaces", 4);

app.use(
  session({
    key: "session_cookie_name",
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

const routers = require("./routes/routers.js");
app.use("/", routers);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
