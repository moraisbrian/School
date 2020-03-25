const connection = require("../../config/dbConnection");
const autenticarModel = require("../models/autenticarModel");

exports.login = (req, res) => {
    var usuario = req.body.usuario;
    var senha = req.body.senha;
    if (usuario != "" && usuario != null && usuario != undefined) {
        if (senha != "" && senha != null && senha != undefined) {
            var autenticar = new autenticarModel();
            var text = "select * from tb_login where usuario = $1 and senha = $2";
            var values = [usuario, senha];
            autenticar.logon(text, values, connection, res, req);
        } else {
            res.redirect("/");
        }
    } else {
        res.redirect("/");
    }
}

exports.sair = (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/");
    });
}