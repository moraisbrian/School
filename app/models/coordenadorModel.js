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

module.exports = Coordenador;