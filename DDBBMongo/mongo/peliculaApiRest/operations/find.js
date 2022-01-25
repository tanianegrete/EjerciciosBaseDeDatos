require("../connection/connection"); //coneccion a base de datos 
const Pelicula = require("../model/pelicula"); // requerimos el modelo


//Devuelve todas las peliculas almacenadas 
async function devuelvePeliculas(response) { //async function= funcion asincrona
    const pelicula = await Pelicula.find();
    response.send(pelicula);
    console.log(pelicula);
}

//devuelvePeliculas();

/*

async function devuelveUnaPelicula() { //async function= funcion asincrona
    const pelicula = await Pelicula.find({ nacionality: "EUA" }); //find : busca en pelicula  {}: condicional 
    console.log(pelicula);
}

devuelveUnaPelicula();
*/

//Obtener los datos de una pelicula

async function devuelveUnaPelicula(idPelicula, response) { //async function= funcion asincrona
    console.log(" llega" + idPelicula)
    const pelicula = await Pelicula.find({ _id: idPelicula }); //find :

    response.send(pelicula);
    console.log(pelicula);
}

//devuelveUnaPelicula("5f6624ab6434621cccb1364f");

//devuelve los datos de los actores por id


async function devuelveActores(idPelicula, response) { //async function= funcion asincrona
    const actor = await Pelicula.find({ _id: idPelicula }, { actors: 1, _id: 0 }); //{ actors: 1, directors: 1, title: 1, _id: 0 } te da los datos relacionados a cada campo
    response.send(actor);
    console.log(actor);
}

//devuelveActores("5f6624ab6434621cccb1364f");

async function devuelveDirectores(idPelicula, response) { //async function= funcion asincrona
    const director = await Pelicula.find({ _id: idPelicula }, { directors: 1, _id: 0 }); //{ actors: 1, directors: 1, title: 1, _id: 0 } te da los datos relacionados a cada campo
    response.send(director);
    console.log(director);
}


async function devuelveGuionista(idPelicula, response) { //async function= funcion asincrona
    const guion = await Pelicula.find({ _id: idPelicula }, { writers: 1, _id: 0 }); //{ actors: 1, directors: 1, title: 1, _id: 0 } te da los datos relacionados a cada campo
    response.send(guion);
    console.log(guion);
}


async function devuelveProductora(idPelicula, response) { //async function= funcion asincrona
    const productora = await Pelicula.find({ _id: idPelicula }, { producer: 1, _id: 0 }); //{ actors: 1, directors: 1, title: 1, _id: 0 } te da los datos relacionados a cada campo
    response.send(productora);
    console.log(productora);
}




module.exports = {
    devuelvePeliculas,
    devuelveUnaPelicula,
    devuelveActores,
    devuelveDirectores,
    devuelveGuionista,
    devuelveProductora


}