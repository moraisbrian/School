const express = require("express");
const bodyParser = require("body-parser");
const routes = require("../app/routes/routes");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);

module.exports = app;