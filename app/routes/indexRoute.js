const router = require("express").Router();
const controller = require("../controllers/indexController");

router.get("/", (req, res) => {
    controller.index(req, res);
});

module.exports = router;