const express = require("express");
const router = express.Router();
const proyectosController = require("../controladores/proyectoController");
router.get("/",proyectosController.getAll);
router.get("/:id",proyectosController.getById);
router.post("/",proyectosController.add);

module.exports = router;