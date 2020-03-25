const router = require("express").Router();
const controller = require("../controllers/alunoController");

router.get("/", (req, res) => {
    controller.aluno(req, res);
});

router.get("/atualizar/:id", (req, res) => {
    controller.getOneAluno(req, res);
});

router.delete("/:id", (req, res) => {
    controller.remover(req, res);
});

router.get("/curso", (req, res) => {
    controller.getCurso(req, res);
});

router.post("/", (req, res) => {
    controller.salvar(req, res);
});

module.exports = router;