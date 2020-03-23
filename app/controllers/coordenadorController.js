const model = require("../models/coordenadorModel");
const connection = require("../../config/dbConnection");

exports.coordenador = (req, res) => {
    connection.connect((err, client, release) => {
        client.query("select * from coordenador", (err, result) => {
            release();
            let values = [];
            for (var i = 0; i < result.rows.length; i++) {
                values.push({
                    id: result.rows[i].id,
                    nome: result.rows[i].nome,
                    sobrenome: result.rows[i].sobrenome,
                    ativo: result.rows[i].ativo == false ? "Inativo" : "Ativo"
                });
            }
            res.render("coordenador", { title: "Coordenador", data: values });
        });
    });
};

exports.getOne = (req, res) => {
    query = {
        text: "select * from coordenador where id = $1",
        values: [req.params.id]
    }
    connection.connect((err, client, release) => {
        client.query(query, (err, result) => {
            release();
            let values = {
                id: result.rows[0].id,
                nome: result.rows[0].nome,
                sobrenome: result.rows[0].sobrenome,
                ativo: result.rows[0].ativo
            };
            res.send(values);
        });
    });
}

exports.salvar = (req, res) => {
    var coordenador = new model();
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
    var coordenador = new model();
    var text = "delete from coordenador where id = $1";
    var values = [req.params.id];

    coordenador.executar(text, values, connection);
    res.render("coordenador", { title: "Coordenador", data: values });
}