const router = require("express").Router();
const controller = require("../controllers/tipoCursoController");

router.get("/", (req, res) => {
    controller.tipoCurso(req, res);
});

router.post("/", (req, res) => {
    controller.salvar(req, res);
});

router.delete("/:id", (req, res) => {
    controller.remover(req, res);
});

router.get("/:id", (req, res) => {
    controller.getOne(req, res);
});

module.exports = router;