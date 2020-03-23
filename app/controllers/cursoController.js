const connection = require("../../config/dbConnection");

exports.curso = (req, res) => {
    connection.connect((err, client, release) => {
        client.query("select * from coordenador", (err, result) => {
            release();
            let values = [];
            for (var i = 0; i < result.rows.length; i++) {
                values.push({
                    id: result.rows[i].id,
                    nome: result.rows[i].nome
                });
            }
            res.render("curso", { title: "Curso", data: values });
        });
    });
}