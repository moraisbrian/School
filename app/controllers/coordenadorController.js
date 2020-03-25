const coordenadorModel = require("../models/coordenadorModel");
const connection = require("../../config/dbConnection");

exports.coordenador = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var coordenador = new coordenadorModel();
    var text = "select * from coordenador";
    coordenador.getAll(text, connection, res, req);
};

exports.getOne = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var coordenador = new coordenadorModel();
    var text = "select * from coordenador where id = $1";
    var values = [req.params.id];
    coordenador.getOne(text, values, connection, res);
}

exports.salvar = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var coordenador = new coordenadorModel();
    if (parseInt(req.body.id) !== 0) {
        var text = "update coordenador set nome = $1, sobrenome = $2, ativo = $3 where id = $4";
        var values = [req.body.nome, req.body.sobrenome, req.body.ativo || false, req.body.id];
    } else {
        var text = "insert into coordenador(nome, sobrenome, ativo) values($1, $2, $3)";
        var values = [req.body.nome, req.body.sobrenome, req.body.ativo || false];
    }
    coordenador.executar(text, values, connection);
    res.redirect("/coordenador");
}

exports.remover = (req, res) => {
    if (req.session.autorizado !== true) {
        res.redirect("/");
        return;
    }
    var coordenador = new coordenadorModel();
    var text = "delete from coordenador where id = $1";
    var values = [req.params.id];

    coordenador.executar(text, values, connection);
    res.render("coordenador", { 
        title: "Coordenador", 
        script: "coordenadorScript", 
        data: values,
        usuarioLogado: req.session.usuario 
    });
}