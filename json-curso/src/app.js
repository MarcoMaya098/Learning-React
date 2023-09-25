const express = require("express");
const path = require("path");
const morgan = require("morgan"); // Make sure you include this line
const app = express();

//setings
app.set("port", 5000);
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/index"));

//static
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(400).send("404 not found");
});

module.exports = app;


