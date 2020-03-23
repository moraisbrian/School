const connection = require("../../config/dbConnection");
const cursoModel = require("../models/cursoModel");

exports.curso = (req, res) => {
    var curso = new cursoModel();
    var text = "select * from coordenador";
    curso.getCoordenador(text, connection, res);
}