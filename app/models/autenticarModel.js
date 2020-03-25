function Autenticar() { }

Autenticar.prototype.logon = (text, values, conn, res, req) => {
    query = {
        text: text,
        values: values
    }
    conn.connect((err, client, release) => {
        client.query(query, (err, result) => {
            release();
            var values = [];
            if (result.rows.length > 0) {
                values = {
                    usuario: result.rows[0].usuario,
                    senha: result.rows[0].senha
                };
                if (values.usuario != "" && values.usuario != null && values.usuario != undefined) {
                    if (values.senha != "" && values.senha != null && values.senha != undefined) {
                        req.session.autorizado = true;
                        req.session.usuario = values.usuario;
                    }
                }
                if (req.session.autorizado) {
                    res.redirect("/curso");
                } else {
                    res.redirect("/");
                }
            } else {
                res.redirect("/");
            }
        });
    });
}

module.exports = Autenticar;