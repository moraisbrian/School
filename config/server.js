const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const app = express();

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set("views", "./app/views");

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRouter = require("../app/routes/indexRoute");
const alunoRouter = require("../app/routes/alunoRoute");
const coordenadorRouter = require("../app/routes/coordenadorRoute");
const cursoRouter = require("../app/routes/cursoRoute");
const tipoCursoRouter = require("../app/routes/tipoCursoRoute");

app.use("/", indexRouter);
app.use("/aluno", alunoRouter);
app.use("/coordenador", coordenadorRouter);
app.use("/curso", cursoRouter);
app.use("/tipocurso", tipoCursoRouter);

module.exports = app;