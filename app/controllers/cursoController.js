const connection = require("../../config/dbConnection");
const cursoModel = require("../models/cursoModel");

exports.curso = (req, res) => {
    res.render("curso", { title: "Curso" });
}

exports.getCoordenador = (req, res) => {
    var curso = new cursoModel();
    var text = "select * from coordenador";
    curso.getCoordenador(text, connection, res);
}

exports.getTipo = (req, res) => {
    var curso = new cursoModel();
    var text = "select * from tipo_curso";
    curso.getTipo(text, connection, res);
}