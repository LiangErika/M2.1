const { response } = require("express");
const donatario = require("../modelos/donatario");

const getAll = async function(req,res){
    let d = donatario.findAll();
    await res.json(d);
}

const getByRFC = async function(req,res){
    await res.json(donatario.findByRFC(req.params.RFC));
}

const add = async function(req,res){
    try{
        const newDona = await donatario.add(req.body);
        res.status(201).json(newDona);
    }catch{
        res.status(500).json(error);
    }
}

exports.getAll = getAll;
exports.getByRFC = getByRFC;
exports.add = add;