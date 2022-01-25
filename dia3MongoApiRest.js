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
        funciones.subidaFotos(request.body.nombreUsuario, request.body.urlPhoto, request.body.titulo, request.body.descripcion, response);

    });


//OBTENER FOTOS
app.get("/fotos/:nombreUsuario",
    function(request, response) {
        funciones.obtenerFotos(request.params.nombreUsuario, response);

    }
);

//SEGUIR
app.put("/seguir",
    function(request, response) {
        funciones.seguir(request.body.name, request.body.follow, response);

    });



//Dejar de seguir 
app.put("/noSeguir",
    function(request, response) {
        funciones.dejarSeguir(request.body.name, request.body.follow, response);

    });



//eliminar una foto

app.delete("/elimina1",
    function(request, response) {
        funciones.eliminarFoto1(request.body.nombreUsuario, request.body.titulo, response);



    });

app.delete("/eliminarTodasFotos",
    function(request, response) {
        funciones.eliminarFotos(request.body.nombreUsuario, response);
    });




app.listen(3050);