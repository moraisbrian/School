function Curso() {}

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

module.exports = Curso;