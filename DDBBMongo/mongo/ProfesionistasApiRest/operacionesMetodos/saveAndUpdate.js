require("../connection/connection"); //coneccion a base de datos 
const Profesional = require("../modelSchema/profesionales"); // requerimos el modelo
const find = require('./find');

//añade  un profesional a la lista de profesionales

async function nuevoProfesional(profesional, response) { //async function= funcion asincrona    
    let profesionalNuevo = new Profesional(profesional); //nuevo objeto pelicula
    const promise = await profesionalNuevo.save();
    response.send(promise);
    console.log(promise);
}
//nuevoProfesional();


//Modifica los datos de un profesional
async function modificaProfesional(profesional, response) {
    let profesionalActualizado = await Profesional.updateMany({ _id: profesional._id }, profesional);
    find.devuelveUnProfesional(profesional._id, response);
}


module.exports = {
    nuevoProfesional,
    modificaProfesional
}