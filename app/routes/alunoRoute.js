const router = require("express").Router();
const controller = require("../controllers/alunoController");

router.get("/", (req, res) => {
    controller.aluno(req, res);
});

module.exports = router;