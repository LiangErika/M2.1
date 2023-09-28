const express = require("express");
const router = express.Router();
const donatariosController = require("../controladores/donatarioController");
router.get("/",donatariosController.getAll);
router.get("/:RFC",donatariosController.getByRFC);
router.post("/",donatariosController.add);

module.exports = router;