exports.index = (req, res) => {
    res.render("index", { title: "Início", script: "indexScript" });
}