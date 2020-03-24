const router = require("express").Router();

const index = require("./indexRoute");
const aluno = require("./alunoRoute");
const coordenador = require("./coordenadorRoute");
const curso = require("./cursoRoute");
const tipoCurso = require("./tipoCursoRoute");

router.use("/", index);
router.use("/aluno", aluno);
router.use("/coordenador", coordenador);
router.use("/curso", curso);
router.use("/tipocurso", tipoCurso);

module.exports = router;



