function TipoCurso() {}

TipoCurso.prototype.executar = (text, values, conn) => {
    const query = {
        text: text,
        values: values
    }
    conn.connect((err, client, release) => {
        client.query(query, (err, res) => {
            release();
        });
    });
}

TipoCurso.prototype.getAll = (text, conn, res, req) => {
    conn.connect((err, client, release) => {
        client.query(text, (err, result) => {
            release();
            let values = [];
            for (var i = 0; i < result.rows.length; i++) {
                values.push({
                    id: result.rows[i].id,
                    identificacao: result.rows[i].identificacao,
                    ativo: result.rows[i].ativo == false ? "Inativo" : "Ativo"
                });
            }
            res.render("tipocurso", { 
                title: "Tipo Curso", 
                script: "tipoCursoScript", 
                data: values,
                usuarioLogado: req.session.usuario 
            });
        });
    });
}

TipoCurso.prototype.getOne = (text, values, conn, res) => {
    query = {
        text: text,
        values: values
    }
    conn.connect((err, client, release) => {
        client.query(query, (err, result) => {
            release();
            let values = {
                id: result.rows[0].id,
                identificacao: result.rows[0].identificacao,
                ativo: result.rows[0].ativo
            };
            res.send(values);
        });
    });
}

module.exports = TipoCurso;