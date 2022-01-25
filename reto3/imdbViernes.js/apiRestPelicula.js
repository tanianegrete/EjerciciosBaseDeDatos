const express = require('express');
const bodyParser = require('body-parser');
//const { response } = require('express');
const app = express();

const Movie = require("../peliculaApi");

const { request } = require('express');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let movi1 = null;
//let arraymovis = [];

app.get("/",
    function(request, response) {
        let respuesta = { error: true, codigo: 200, mensaje: 'punto de inicio peliculas' };
        response.send(respuesta);
    }
);


app.get("/pelicula",
    function(request, response) {
        response.send(movi1);
    }
);




app.post("/pelicula", //se crea un apelicula 
    function(request, response) {
        movi1 = new Movie(request.body.title, request.body.releaseYear, request.body.nacionality, request.body.genre, request.body.writer, request.body.lenguaje, request.body.plataforma, request.body.isMCU, request.body.mainCharacterName);

        //  let resultado = arraymovis.push(movi1);
        response.send(movi1 + " Pelicula creada");
        // let respuesta = { error: true, codigo: 200, mensaje: 'Usuario creado', resultado: profesional };
        // response.send(respuesta);
    }



);

app.put("/pelicula", // actualizar datos
    function(request, response) {
        movi1.title = request.body.title;
        movi1.releaseYear = request.body.releaseYear;
        movi1.nacionality = request.body.nacionality;
        movi1.genre = request.body.genre;
        movi1.writer = request.body.writer;
        movi1.lenguaje = request.body.lenguaje;
        movi1.plataform = request.body.plataform;
        movi1.isMCU = request.body.isMCU;
        movi1.mainCharacterName = request.body.mainCharacterName;


        let respuesta = { error: true, codigo: 200, mensaje: 'Usuario Actualizado', resultado: usuario };
        response.send(respuesta);
    }
);

app.delete("/pelicula", //elimina pelicula
    function(request, response) {

        movi1 = null

        let respuesta = { error: true, codigo: 200, mensaje: 'Usuario Eliminado', resultado: usuario };
        response.send(respuesta);

    }
);








app.listen(3020);