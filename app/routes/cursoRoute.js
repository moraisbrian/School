const router = require("express").Router();
const controller = require("../controllers/cursoController");

router.get("/", (req, res) => {
    controller.curso(req, res);
});

module.exports = router;