function Aluno() {}

Aluno.prototype.executar = (text, values, conn) => {
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

Aluno.prototype.getOneAluno = (text, values, conn, res) => {
    query = {
        text: text,
        values: values
    }
    conn.connect((err, client, release) => {
        client.query(query, (err, result) => {
            release();
            let values = {
                id: result.rows[0].id,
                nome: result.rows[0].nome,
                sobrenome: result.rows[0].sobrenome,
                ativo: result.rows[0].ativo,
                cursoid: result.rows[0].cursoid
            };
            res.send(values);
        });
    });
}

Aluno.prototype.getAll = (text, conn, res, req) => {
    conn.connect((err, client, release) => {
        client.query(text, (err, result) => {
            release();
            let values = [];
            for (var i = 0; i < result.rows.length; i++) {
                values.push({
                    id: result.rows[i].id,
                    nome: result.rows[i].nome,
                    sobrenome: result.rows[i].sobrenome,
                    ativo: result.rows[i].ativo == false ? "Inativo" : "Ativo",
                    curso: result.rows[i].curso
                });
            }
            res.render("aluno", { 
                title: "Aluno", 
                script: "alunoScript", 
                aluno: values, 
                usuarioLogado: req.session.usuario 
            });
        });
    });
}

Aluno.prototype.getCurso = (text, conn, res) => {
    conn.connect((err, client, release) => {
        client.query(text, (err, result) => {
            release();
            let values = [];
            for (var i = 0; i < result.rows.length; i++) {
                values.push({
                    id: result.rows[i].id,
                    identificacao: result.rows[i].identificacao
                });
            }
            res.send(values);
        });
    });
}

module.exports = Aluno;