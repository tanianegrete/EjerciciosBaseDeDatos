const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const funciones = require("./dia3MongoFunciones");
let Photos = require("./dia3MongoPhotos");
let User = require("./dia3MongoUser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/dia3Mongo', { useNewUrlParser: true, useUnifiedTopology: true });


//SUBIR FOTOS
app.post("/fotos",
    function(request, response) {

    });






//VER FOTOS
app.get("/fotos:nombreUsuario",
    function(request, response) {
        funciones.obtenerFotos(request.params.nombreUsuario, response);

    }
);

//SUBIR FOTOS
app.post("/subirFotos",
    function(request, response) {

    });




app.put("/seguir",
    function(request, response) {
        let actorTodos = new Professional(request.body.name, request.body.age, request.body.genre, request.body.weigtht, request.body.height, request.body.hairColor, request.body.hairColor, request.body.race, request.body.isRetired);
        let respuesta1 = movi1.actors.push(actorTodos);
        response.send(respuesta1 + "Actor Creado");

    });

app.put("/dejarSeguir",
    function(request, response) {

        response.send(movie1.actors);

    }

);

app.delete("eliminarFoto/:id",
    function(request, response) {

    })

app.delete("/eliminarFotos",
    function(request, response) {

    })


app.listen(3050);