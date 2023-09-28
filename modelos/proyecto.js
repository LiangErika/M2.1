const proyecto = [
    {
        IdDelProyecto: "PR-100",
        nombre: "Proyectote",
        descripcion: "Super proyecto",
        imagenAsociadaAlProyecto: null,
        donatario: null,
        donadores: [],
        cantidadDonada: null
    },
    {
        IdDelProyecto : "PR-523",
        nombre : "Proyectito",
        descripcion : "Mini proyecto",
        imagenAsociadaAlProyecto : null,
        donatario : null,
        donadores : [],
        cantidadDonada : null
    }
]

const findAll = function(){
    return proyecto;
}

const findById = function(){
    let p = proyecto.find(e => e.IdDelProyecto==IdDelProyecto);
    return p;
}

const add = async function(newPro){
    const id = Math.max(...proyecto.map((pro=>proyecto.IdDelProyecto),0)+1);
    const newProyecto={
        IdDelProyecto : id,
        ...newPro,
    };
    proyecto.push(newProyecto);
    return newProyecto;
}

exports.findAll = findAll;
exports.findById = findById;
exports.add = add;