require("../connection/connection"); //coneccion a base de datos 

const Profesional = require("../modelSchema/profesionales"); // requerimos el modelo 

let profesional = new Profesional({


    name: "Gale Garcia :)",
    age: 40,
    genre: "Masculino",
    weigtht: "60",
    height: "170",
    hairColor: "Oscuro",
    eyeColor: "negros",
    race: "moreno",
    isRetired: true,
    nationality: "Mexico",
    oscarsNumber: "2",
    profession: "actor"


});


profesional.save((err, document) => {
    if (err) {
        console.log("Error al subir pelicula a la base de datos." + err);
    }
    console.log(" PELICULA GUARDADA CORRECTAMENTE." + document);
});


profesional = new Profesional({


    name: "Brad Pit :)",
    age: 50,
    genre: "Masculino",
    weigtht: "70",
    height: "180",
    hairColor: "claros",
    eyeColor: "verdes",
    race: "rubio",
    isRetired: true,
    nationality: "EUA",
    oscarsNumber: "5",
    profession: "actor"


});


profesional.save((err, document) => {
    if (err) {
        console.log("Error al subir pelicula a la base de datos." + err);
    }
    console.log(" PELICULA GUARDADA CORRECTAMENTE." + document);
});


profesional = new Profesional({


    name: "Tom Cruz:)",
    age: 55,
    genre: "Masculino",
    weigtht: "70",
    height: "180",
    hairColor: "closcuroros",
    eyeColor: "oscuro",
    race: "moreno",
    isRetired: true,
    nationality: "EUA",
    oscarsNumber: "5",
    profession: "actor"


});


profesional.save((err, document) => {
    if (err) {
        console.log("Error al subir pelicula a la base de datos." + err);
    }
    console.log(" PELICULA GUARDADA CORRECTAMENTE." + document);
});



profesional = new Profesional({


    name: "Alexandra:)",
    age: 40,
    genre: "Femenino",
    weigtht: "60",
    height: "170",
    hairColor: "closcuroros",
    eyeColor: "oscuro",
    race: "moreno",
    isRetired: true,
    nationality: "Europa",
    oscarsNumber: "5",
    profession: "actor"


});


profesional.save((err, document) => {
    if (err) {
        console.log("Error al subir pelicula a la base de datos." + err);
    }
    console.log(" PELICULA GUARDADA CORRECTAMENTE." + document);
});