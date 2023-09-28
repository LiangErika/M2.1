const proyecto = require("../modelos/proyecto");

const getAll = async function(req,res){
    let p = proyecto.findAll();
    await res.json(p);
}

const getById = async function(req,res){
    await res.json(proyecto.findById(req.params.IdDeProyecto));
}

const add = async function(req,res){
    try{
        const newPro = await proyecto.add(req.body);
        res.status(201).json(newPro);
    }catch{
        res.status(500).json(error);
    }
}

exports.getAll = getAll;
exports.getById =getById;
exports.add = add;