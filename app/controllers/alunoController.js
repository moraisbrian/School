const connection = require("../../config/dbConnection");
const alunoModel = require("../models/alunoModel");

exports.aluno = (req, res) => {
    var aluno = new alunoModel();
    var text = "select aluno.id as id, ";
    text += "aluno.nome as nome, ";
    text += "aluno.sobrenome as sobrenome, ";
    text += "aluno.ativo as ativo, ";
    text += "curso.identificacao as curso ";
    text += "from aluno ";
    text += "inner join curso ";
    text += "on curso.id = aluno.cursoid "
    aluno.getAll(text, connection, res);
}

exports.getOneAluno = (req, res) => {
    var aluno = new alunoModel();
    var text = "select * from aluno where id = $1";
    var values = [req.params.id];
    aluno.getOneAluno(text, values, connection, res);
}

exports.salvar = (req, res) => {
    var aluno = new alunoModel();
    if (parseInt(req.body.id) !== 0) {
        var text = "update aluno set ";
        text += "nome = $1, ";
        text += "sobrenome = $2, ";
        text += "ativo = $3, ";
        text += "cursoid = $4 ";
        text += "where id = $5";
        var values = [
            req.body.nome, 
            req.body.sobrenome, 
            req.body.ativo || false, 
            req.body.cursoid,
            req.body.id
        ];
    } else {
        var text = "insert into aluno(nome, sobrenome, ativo, cursoid) values($1, $2, $3, $4)";
        var values = [req.body.nome, req.body.sobrenome, req.body.ativo || false, req.body.cursoid];
    }
    aluno.executar(text, values, connection);
    res.redirect("/aluno");
}

exports.remover = (req, res) => {
    var aluno = new alunoModel();
    var text = "delete from aluno where id = $1";
    var values = [req.params.id];

    aluno.executar(text, values, connection);
    res.render("aluno", { title: "Aluno", script: "alunoScript", data: values });
}

exports.getCurso = (req, res) => {
    var aluno = new alunoModel();
    var text = "select * from curso";
    aluno.getCurso(text, connection, res);
}