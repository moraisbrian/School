function Curso() { }

Curso.prototype.getCoordenador = (text, conn, res) => {
    conn.connect((err, client, release) => {
        client.query(text, (err, result) => {
            release();
            let values = [];
            for (var i = 0; i < result.rows.length; i++) {
                values.push({
                    id: result.rows[i].id,
                    nome: result.rows[i].nome
                });
            }
            res.send(values);
        });
    });
}

Curso.prototype.getTipo = (text, conn, res) => {
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

Curso.prototype.executar = (text, values, conn) => {
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

Curso.prototype.getAll = (text, conn, res) => {
    conn.connect((err, client, release) => {
        client.query(text, (err, result) => {
            release();
            let values = [];
            for (var i = 0; i < result.rows.length; i++) {
                values.push({
                    id: result.rows[i].id,
                    identificacao: result.rows[i].identificacao,
                    tipo: result.rows[i].tipo,
                    coordenador: result.rows[i].coordenador,
                    ativo: result.rows[i].ativo == false ? "Inativo" : "Ativo"
                });
            }
            res.render("curso", { title: "Curso", script: "cursoScript", data: values });
        });
    });
}

Curso.prototype.getOne = (text, values, conn, res) => {
    query = {
        text: text,
        values: values
    }
    conn.connect((err, client, release) => {
        client.query(query, (err, result) => {
            release();
            var data = {
                id: result.rows[0].id,
                identificacao: result.rows[0].identificacao,
                tipo: result.rows[0].tipo,
                coordenador: result.rows[0].coordenador,
                coordenadorid: result.rows[0].coordenadorid,
                tipoid: result.rows[0].tipoid,
                ativo: result.rows[0].ativo
            };
            res.send(data);
        });
    });
}

module.exports = Curso;