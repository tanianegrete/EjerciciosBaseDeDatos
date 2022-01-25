const express = require('express');
const bodyParser = require('body-parser');
//const { response } = require('express');
const app = express();
//const Professional = require("../imbd");
const Professional = require("../professional");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let profesional = null;
//let profesional1 = new Professional(" Sandra Bullon.", 45, " Femenino.", 60, 120, " Castaño.", " Oscuro", " Actriz.", true, " Americanos", 4)

//let profesional = { name: "", age: "", genre: "", weigtht: "", height: "", hairColor: "", eyeColor: "", race: "", isRetired: "" };




app.get("/",
    function(request, response) {
        let respuesta = { error: true, codigo: 200, mensaje: 'punto de inicio' };
        response.send(respuesta);
    }
);

app.get("/profesional",
    function(request, response) {
        response.send(profesional);
    }
);

app.get("/profesional/:name",
    function(request, response) {
        let name = request.params.name
        if (!name || name === profesional.nombre)
            response.send(profesional);
        else
            response.send({ error: true, codigo: 200, mensaje: 'el profesional no existe ' });
    }
);

app.post("/profesional",
    function(request, response) {
        profesional = new Professional(request.body.name, request.body.age, request.body.genre, request.body.weigtht, request.body.height, request.body.hairColor, request.body.hairColor, request.body.race, request.body.age);


        let respuesta = { error: true, codigo: 200, mensaje: 'Usuario creado', resultado: profesional };
        response.send(respuesta);
    }
);

app.put("/profesional",
    function(request, response) {
        profesional.name = request.body.name;
        profesional.age = request.body.age;
        profesional.genre = request.body.genre;
        profesional.weigtht = request.body.weigtht;
        profesional.height = request.body.height;
        profesional.hairColor = request.body.hairColor;
        profesional.eyeColor = request.body.eyeColor;
        profesional.race = request.body.race;
        profesional.isRetired = request.body.isRetired;


        let respuesta = { error: true, codigo: 200, mensaje: 'Usuario Actualizado', resultado: usuario };
        response.send(respuesta);
    }
);

app.delete("/profesional",
    function(request, response) {

        let profesional = null;

        let respuesta = { error: true, codigo: 200, mensaje: 'Usuario Eliminado', resultado: usuario };
        response.send(respuesta);

    }
);

//app.use(
//  function(request, response) {
//      respuesta = { error: true, codigo: 400, mensaje: 'URL NO ENCONTRADA', resultado: usuario };
//      response.status(404).send(respuesta);
//  }
//)



app.listen(3006);