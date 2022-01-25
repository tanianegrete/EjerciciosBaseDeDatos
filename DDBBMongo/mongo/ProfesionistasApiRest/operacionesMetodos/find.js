require("../connection/connection"); //coneccion a base de datos 
const Profesional = require("../modelSchema/profesionales"); // requerimos el modelo 

//Obtener los datos de un profesional atravez de id

async function devuelveUnProfesional(idProfesional, response) { //async function= funcion asincrona
    console.log(" llega" + idProfesional);
    const profesional = await Profesional.find({ _id: idProfesional }); //find :
    response.send(profesional);
    console.log(profesional);
}

//devuelveUnProfesional("5f676fa915e81540dc06e976");


//OBTEN DATOS DE TODOS LOS PROFESIONALES 
async function devuelveTodosProfesionales(response) { //async function= funcion asincrona
    const profesional = await Profesional.find();
    response.send(profesional); //cuando llega el mensaje de api rest response.send
    console.log(profesional);
}
//devuelveTodosProfesionales();


module.exports = {
    devuelveUnProfesional,
    devuelveTodosProfesionales

}