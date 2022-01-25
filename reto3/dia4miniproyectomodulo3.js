const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Professional = require("./professional");
const Movie = require("./peliculas.js");
const { send } = require("process");​​
app.use(bodyParser.json());​​
var profesionales = []​
var profesional = new Professional

// Para hacer el POST
// {
//     "name": "Calamardo",
//     "age": 45,
//    
//     "isRetired": false,
//     "nationality": "Español",
//     "oscarsNumber": 9,
//    
// }
​​
app.get("/", function(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: "Punto de inicio" };
    response.send(respuesta);
});​​
app.get("/profesionales", function(request, response) {
        response.send(profesionales)
    })​
    //OBTENER PROFESIONAL POR EL ID PASADO EN EL BODY
    ​
app.get("/profesionales", function(request, response) {
    if (profesionales[request.body.id] > profesionales.length) {
        response.send("Profesional no encontrado")
    } else {
        response.send(profesionales[request.body.id])
    }
})​
app.post("/profesionales", function(request, response) {​
    var profesional = new Professional(request.body.name,
            request.body.age,
            // request.body.genre,
            // request.body.weight,
            // request.body.height,
            // request.body.hairColor,
            // request.body.eyeColor,
            // request.body.race,
            request.body.isRetired,
            request.body.nationality,
            request.body.oscarsNumber)
        // request.body.profession)

    profesionales.push(profesional)
    response.send("Profesional creado")​

});​​​
app.put("/profesionales", function(request, response) {​

    ​
    profesionales[request.body.id].name = request.body.name;
    profesionales[request.body.id].age = request.body.age;
    // profesionales[request.body.id].genre = request.body.genre;
    // profesionales[request.body.id].weight = request.body.weight;
    // profesionales[request.body.id].height = request.body.height;
    // profesionales[request.body.id].hairColor = request.body.hairColor;
    // profesionales[request.body.id].eyeColor = request.body.eyeColor;
    // profesionales[request.body.id].race = request.body.race;
    profesionales[request.body.id].isRetired = request.body.isRetired;
    profesionales[request.body.id].nationality = request.body.nationality;
    profesionales[request.body.id].oscarsNumber = request.body.oscarsNumber;
    // profesionales[request.body.id].profession = request.body.profession;
    ​
    response.send(profesionales)​​
});​​
app.delete("/profesionales", function(request, response) {​
    profesionales.splice(request.body.id, 1);
    response.send("Profesional eliminado");​
});













app.listen(2000);​​​