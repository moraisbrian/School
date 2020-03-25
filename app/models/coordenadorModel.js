function Coordenador() {}

Coordenador.prototype.executar = (text, values, conn) => {
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

Coordenador.prototype.getOne = (text, values, conn, res) => {
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
                ativo: result.rows[0].ativo
            };
            res.send(values);
        });
    });
}

Coordenador.prototype.getAll = (text, conn, res) => {
    conn.connect((err, client, release) => {
        client.query(text, (err, result) => {
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
            res.render("coordenador", { title: "Coordenador", script: "coordenadorScript", data: values });
        });
    });
}

module.exports = Coordenador;