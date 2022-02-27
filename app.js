const express = require("express");
<<<<<<< HEAD
const session = require("express-session");
const passport = require("passport");
=======
>>>>>>> 7f50078b7ffcee4bd6e38bec99f32da8dbeeccde
const app = express();

app.set("json spaces", 4);

<<<<<<< HEAD
app.use(
  session({
    key: "session_cookie_name",
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

=======
>>>>>>> 7f50078b7ffcee4bd6e38bec99f32da8dbeeccde
const routers = require("./routes/routers.js");
app.use("/", routers);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
