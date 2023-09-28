const express = require("express");
const router = express.Router();
const donadoresController = require("../controladores/donadorController");
router.get("/",donadoresController.getAll) ;
router.get("/:RFC",donadoresController.getByRFC);
router.post("/",donadoresController.add);

module.exports = router;