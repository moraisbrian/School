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

module.exports = router;