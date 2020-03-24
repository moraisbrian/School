const connection = require("../../config/dbConnection");
const tipoCursoModel = require("../models/tipoCursoModel");

exports.tipoCurso = (req, res) => {
    var tipoCurso = new tipoCursoModel();
    var text = "select * from tipo_curso";
    tipoCurso.getAll(text, connection, res);
}

exports.getOne = (req, res) => {
    var tipoCurso = new tipoCursoModel();
    var text = "select * from tipo_curso where id = $1";
    var values = [req.params.id];
    tipoCurso.getOne(text, values, connection, res);
}

exports.salvar = (req, res) => {
    var tipoCurso = new tipoCursoModel();
    if (parseInt(req.body.id) !== 0) {
        var text = "update tipo_curso set identificacao = $1, ativo = $2 where id = $3";
        var values = [req.body.identificacao, req.body.ativo || false, req.body.id];
    } else {
        var text = "insert into tipo_curso(identificacao, ativo) values($1, $2)";
        var values = [req.body.identificacao, req.body.ativo || false];
    }
    tipoCurso.executar(text, values, connection);
    res.redirect("/tipocurso");
}

exports.remover = (req, res) => {
    var tipoCurso = new tipoCursoModel();
    var text = "delete from tipo_curso where id = $1";
    var values = [req.params.id];

    tipoCurso.executar(text, values, connection);
    res.render("tipocurso", { title: "Tipo Curso", data: values });
}