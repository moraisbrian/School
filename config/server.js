const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const routes = require("../app/routes/routes");
const app = express();

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set("views", "./app/views");

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);

module.exports = app;