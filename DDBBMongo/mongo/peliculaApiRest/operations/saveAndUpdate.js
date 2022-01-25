//añadir datos en la base de datos= save
//Actualizar la base de datos= update
require("../connection/connection"); //coneccion a base de datos 
const Pelicula = require("../model/pelicula"); // requerimos el modelo
const find = require('./find');

// insertar una pelicula
async function insertarPelicula(pelicula, response) { //async function= funcion asincrona    
    let nuevaPelicula = new Pelicula(pelicula); //nuevo objeto pelicula
    const promise = await nuevaPelicula.save();
    response.send(promise);
    console.log(promise);
}


//añade  nuevo actor en  la lista de peliculas

async function nuevoActoraPelicula(id_pelicula, actor, response) { //
    let peliculaActualizada = await Pelicula.update({ _id: id_pelicula }, { $push: { actors: actor } }); //{ $push: { actors: actor } }guarda nuevo actor que hemos colocada en postman
    find.devuelveUnaPelicula(id_pelicula, response);
}


//añade  nuevo director en  la lista de peliculas

async function nuevoDirectoraPelicula(id_pelicula, director, response) { //
    let peliculaActualizada = await Pelicula.update({ _id: id_pelicula }, { $push: { directors: director } });
    find.devuelveUnaPelicula(id_pelicula, response);
}

//añade nuevo escritor a pelicula
async function nuevoEscritorPelicula(id_pelicula, escritor, response) { //
    let peliculaActualizada = await Pelicula.update({ _id: id_pelicula }, { $push: { writers: escritor } });
    find.devuelveUnaPelicula(id_pelicula, response);
}

//actualiza los datos de una pelicula
async function peliculaActualizada(pelicula, response) {
    let peliculaActualizada = await Pelicula.updateMany({ _id: pelicula._id }, pelicula);
    find.devuelveUnaPelicula(pelicula._id, response);
}




module.exports = {
    insertarPelicula,
    nuevoActoraPelicula,
    nuevoDirectoraPelicula,
    nuevoEscritorPelicula,
    peliculaActualizada,
}