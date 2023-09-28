const { response } = require("express");

const donador = [
    {
        RFC : 1,
        nombre: "Juan",
        proyectoAsociado: "PR-100",
        imagenDelDonador: "",
        cantidadDonada: 100.00
    }
]

const findAll = function(){
    return donador;
}

const findByRFC = function(){
    let p = donador.find(e => e.RFC == RFC);
    return p;
}

const add = async function(newDona){
    const rfc = Math.max(...donador.map((dona=>donador.rfc),0)+1);
    const newDonador={
        RFC : rfc,
        ...newDona,
    };
    donador.push(newDona);
    return newDonador;
}


exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.add = add;