require("../connection/connection"); //coneccion a base de datos 
const Pelicula = require("../model/pelicula"); // requerimos el modelo
const find = require('./find');


//eliminar una pelicula 
async function eliminarPelicula(id, response) {
    let peliculaActualizada = await Pelicula.deleteOne({ "_id": id });
    response.send(true);

}


//async function devuelveGuionista(idPelicula, response) { //async function= funcion asincrona
//    const guion = await Pelicula.find({ _id: idPelicula }, { writers: 1, _id: 0 }); //{ actors: 1, directors: 1, title: 1, _id: 0 } te da los datos relacionados a cada campo
//    response.send(guion);
//    console.log(guion);
//}
//const guion = await Pelicula.find({ _id: idPelicula }, { writers: 1, _id: 0 });-- { $pull: { actors: actor } })
//elimina un actor de la pelicula



async function eliminaActor(id_pelicula, actor, response) {
    console.log("elimina1")
    let peliculaActualizada = await Pelicula.update({ _id: id_pelicula }, { $pull: { actors: actor } }); //{ $pull: { actors: actor } }elimina actor que hemos colocada en postman
    console.log("elimina2")
    find.devuelveUnaPelicula(id_pelicula, response);
    console.log("elimina3 actor eliminado" + response)

}

//elimina un director de la pelicula
async function eliminaDirector(id_pelicula, director, response) {
    let peliculaActualizada = await Pelicula.update({ _id: id_pelicula }, { $pull: { directors: director } }); //{ $pull:  { writers: guionista }}elimina guionista que hemos colocada en postman
    find.devuelveUnaPelicula(id_pelicula, response);

}






module.exports = {

    eliminarPelicula,
    eliminaActor,
    eliminaDirector


}