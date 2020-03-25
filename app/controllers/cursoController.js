const connection = require("../../config/dbConnection");
const cursoModel = require("../models/cursoModel");

exports.curso = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var curso = new cursoModel();
    var text = "select curso.id as id, ";
    text += "curso.identificacao as identificacao, ";
    text += "tipo_curso.identificacao as tipo, ";
    text += "coordenador.nome as coordenador, ";
    text += "curso.ativo as ativo ";
    text += "from curso inner join tipo_curso ";
    text += "on curso.tipoid = tipo_curso.id ";
    text += "inner join coordenador ";
    text += "on curso.coordenadorid = coordenador.id";
    curso.getAll(text, connection, res, req);
}

exports.getCoordenador = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var curso = new cursoModel();
    var text = "select * from coordenador";
    curso.getCoordenador(text, connection, res);
}

exports.getTipo = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var curso = new cursoModel();
    var text = "select * from tipo_curso";
    curso.getTipo(text, connection, res);
}

exports.salvar = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var curso = new cursoModel();
    if (parseInt(req.body.id) !== 0) {
        var text = "update curso set identificacao = $1, ativo = $2, tipoid = $3, coordenadorid = $4 where id = $5";
        var values = [req.body.identificacao, req.body.ativo || false, req.body.tipo, req.body.coordenador, req.body.id];
    } else {
        var text = "insert into curso(identificacao, ativo, tipoid, coordenadorid) values($1, $2, $3, $4)";
        var values = [req.body.identificacao, req.body.ativo || false, req.body.tipo, req.body.coordenador];
    }
    curso.executar(text, values, connection);
    res.redirect("/curso");
}

exports.getOne = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var curso = new cursoModel();
    var text = "select curso.id as id, ";
    text += "curso.identificacao as identificacao, ";
    text += "tipo_curso.identificacao as tipo, ";
    text += "coordenador.nome as coordenador, ";
    text += "curso.ativo as ativo, ";
    text += "curso.tipoid as tipoid, ";
    text += "curso.coordenadorid as coordenadorid "
    text += "from curso inner join tipo_curso ";
    text += "on curso.tipoid = tipo_curso.id ";
    text += "inner join coordenador ";
    text += "on curso.coordenadorid = coordenador.id ";
    text += "where curso.id = $1";
    var values = [req.params.id];
    curso.getOne(text, values, connection, res);
}

exports.remover = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var curso = new cursoModel();
    var text = "delete from curso where id = $1";
    var values = [req.params.id];

    curso.executar(text, values, connection);
    res.render("curso", { 
        title: "Curso", 
        script: "cursoScript", 
        data: values,
        usuarioLogado: req.session.usuario 
    });
}