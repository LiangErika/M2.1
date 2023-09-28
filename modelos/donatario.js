const { post } = require("../router/productos");

const donatario = [
    {
        RFC: 1,
        nombre: "Pedro",
        proyectoAsociado: "Proyectote",
        imagenDelDonatario: "https://random.imagecdn.app/100/100"
    },
    {
        RFC : 2,
        nombre: "Andrea",
        proyectoAsociado: "Proyectito",
        imagenDelDonatario: "https://random.imagecdn.app/100/100"
    }
]

const findAll = function(){
    return donatario;
}

const findByRFC = function(rfc){
    let p = donatario.find(e => e.rfc==RFC);
    return p;
}

const add = async function(newDona){
    const rfc = Math.max(...donatario.map((dona=>donatario.rfc),0)+1);
    const newDonatario={
        RFC : rfc,
        ...newDona,
    };
    donatario.push(newDona);
    return newDonatario;
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.add = add;