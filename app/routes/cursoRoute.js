const router = require("express").Router();
const controller = require("../controllers/cursoController");

router.get("/", (req, res) => {
    controller.curso(req, res);
});

router.get("/coordenador", (req, res) => {
    controller.getCoordenador(req, res);
});

router.get("/tipo", (req, res) => {
    controller.getTipo(req, res);
});

router.post("/", (req, res) => {
    controller.salvar(req, res);
});

router.get("/:id", (req, res) => {
    controller.getOne(req, res);
});

router.delete("/:id", (req, res) => {
    controller.remover(req, res);
});

module.exports = router;