const router = require("express").Router();
const controller = require("../controllers/coordenadorController");

router.get("/", (req, res) => {
    controller.coordenador(req, res);
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