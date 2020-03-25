const router = require("express").Router();
const controller = require("../controllers/autenticarController");

router.post("/", (req, res) => {
    controller.login(req, res);
});

router.get("/sair", (req, res) => {
    controller.sair(req, res);
});

module.exports = router;