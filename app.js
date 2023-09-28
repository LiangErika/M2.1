const cors = require("cors");
const express = require("express");
const productosRouter=require("./router/productos");
const donadorRouter= require("./router/donadores");
const donatarioRouter=require("./router/donatarios");
const proyectoRouter=require("./router/proyectos");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/productos",productosRouter);
app.use("/donador",donadorRouter);
app.use("/donatario",donatarioRouter);
app.use("/proyecto",proyectoRouter);
/*
app.get("/productos",productosController.getAll);
app.get("/productos/:sku",productosController.getBySKU);
*/

app.listen(3000,()=>{
    console.log("server en puerto 3000");
})