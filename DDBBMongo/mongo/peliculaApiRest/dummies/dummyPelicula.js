//poblar base de datos
require("../connection/connection"); //coneccion a base de datos 

const Pelicula = require("../model/pelicula"); // requerimos el modelo 

let pelicula = new Pelicula({
    title: "Rambo",
    releaseYear: 1998,
    nacionality: "EUA",
    genre: "Action",
    actors: ["PEPE", "Rambo", "JULIETA"],
    directors: ["PEPE5", "Rambo5", "JULIETA5"],
    writers: ["PEPE7", "Rambo7", "JULIETA7"],
    plataform: "YOU TUBE",
    isMCU: "NINGUNO",
    mainCharacterName: "Rambo", //nombre del personaje principal
    producer: "LALITO",
    distributor: "MIGUEL"
});

pelicula.save((err, document) => {
    if (err) {
        console.log("Error al subir pelicula a la base de datos." + err);
    }
    console.log(" PELICULA GUARDADA CORRECTAMENTE." + document);
});

pelicula = new Pelicula({
    title: "Pinocho",
    releaseYear: 1992,
    nacionality: "EUA",
    genre: "Infantil",
    actors: ["jepeto", "lol", "JULIETA"],
    directors: ["PEPE5", "Rambo5", "JULIETA5"],
    writers: ["PEPE7", "Rambo7", "JULIETA7"],
    plataform: "YOU TUBE",
    isMCU: "NINGUNO",
    mainCharacterName: "Pinocho", //nombre del personaje principal
    distributor: "MIGUEL"
});

pelicula.save((err, document) => {
    if (err) {
        console.log("Error al subir pelicula a la base de datos." + err);
    }
    console.log(" PELICULA GUARDADA CORRECTAMENTE." + document);
})

pelicula = new Pelicula({
    title: "Quiricu",
    releaseYear: 2000,
    nacionality: "Africa",
    genre: "Infantil",
    actors: ["PEPE", "Rambo", "JULIETA"],
    directors: ["PEPE5", "Rambo5", "JULIETA5"],
    writers: ["PEPE7", "Rambo7", "JULIETA7"],
    plataform: "Netflix",
    isMCU: "NINGUNO",
    mainCharacterName: "Rambo",
    producer: "Javier",
    distributor: "Samuekl"
});

pelicula.save((err, document) => {
    if (err) {
        console.log("Error al subir pelicula a la base de datos." + err);
    }
    console.log(" PELICULA GUARDADA CORRECTAMENTE." + document);
});

/*
"title": "Quiricu",
    "releaseYear": 2000,
    "nacionality": "Africa",
    "genre": "Infantil",
    "actors": ["PEPE", "Rambo", "JULIETA"],
    "directors": ["PEPE5", "Rambo5", "JULIETA5"],
    "writers": ["PEPE7", "Rambo7", "JULIETA7"],
    "plataform": "Netflix",
    "isMCU": "NINGUNO",
    "mainCharacterName": "Rambo",
    "producer": "Javier",
    "distributor": "Samuekl"
*/