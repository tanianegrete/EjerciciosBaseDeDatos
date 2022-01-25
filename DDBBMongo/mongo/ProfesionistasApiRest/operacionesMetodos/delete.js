require("../connection/connection"); //coneccion a base de datos 
const Profesional = require("../modelSchema/profesionales"); // requerimos el modelo


//eliminar un profesional de la coleccion de datos
async function eliminarProfesional(idProfesional, response) {
    let profesionalActualizado = await Profesional.deleteOne({ "_id": idProfesional });
    response.send(true);

}

module.exports = {
    eliminarProfesional



}