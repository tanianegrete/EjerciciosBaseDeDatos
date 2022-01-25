const express = require('express');
const bodyParser = require('body-parser');
//const { response } = require('express');
const app = express();
//const Professional = require("../imbd");
const Professional = require("../professional");
const { request } = require('express');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let profesional = null;
//let profesional1 = new Professional(" Sandra Bullon.", 45, " Femenino.", 60, 120, " Castaño.", " Oscuro", " Actriz.", true, " Americanos", 4)

//let profesional = { name: "", age: "", genre: "", weigtht: "", height: "", hairColor: "", eyeColor: "", race: "", isRetired: "" };
let arrayProfesional = [];



app.get("/",
    function(request, response) {
        let respuesta = { error: true, codigo: 200, mensaje: 'punto de inicio' };
        response.send(respuesta);
    }
);

app.get("/profesionales/:id",
    function(request, response) {
        let id = request.params.id;
        if (id < arrayProfesional.length)
            response.send(arrayProfesional[id]);

        else response.send({ error: true, codigo: 200, mensaje: 'id desconocido' });
    }
);

app.get("/profesionales",
    function(request, response) {
        response.send(arrayProfesional);
    }
);



app.post("/profesionales",
    function(request, response) {
        profesional = new Professional(request.body.name, request.body.age, request.body.genre, request.body.weigtht, request.body.height, request.body.hairColor, request.body.hairColor, request.body.race, request.body.isRetired);
        let respuesta1 = arrayProfesional.push(profesional);
        response.send(respuesta1 + "Profesional Creado");
    }
);

app.put("/profesionales",
    function(request, response) {

        arrayProfesional[request.body.id].name = request.body.name;
        arrayProfesional[request.body.id].age = request.body.age;
        arrayProfesional[request.body.id].genre = request.body.genre;
        arrayProfesional[request.body.id].weigtht = request.body.weigtht;
        arrayProfesional[request.body.id].height = request.body.height;
        arrayProfesional[request.body.id].hairColor = request.body.hairColor;
        arrayProfesional[request.body.id].eyeColor = request.body.eyeColor;
        arrayProfesional[request.body.id].race = request.body.race;
        arrayProfesional[request.body.id].isRetired = request.body.isRetired;


        let respuesta = { error: true, codigo: 200, mensaje: 'Usuario Actualizado', resultado: arrayProfesional };
        response.send(respuesta);
    }
);

app.delete("/profesionales",
    function(request, response) {
        arrayProfesional[request.body.id] = null

        /* arrayProfesional[request.body.id].name = null;
         arrayProfesional[request.body.id].age = null;
         arrayProfesional[request.body.id].genre = null;
         arrayProfesional[request.body.id].weigtht = null;
         arrayProfesional[request.body.id].height = null;
         arrayProfesional[request.body.id].hairColor = null;
         arrayProfesional[request.body.id].eyeColor = null;
         arrayProfesional[request.body.id].race = null;
         arrayProfesional[request.body.id].isRetired = null;*/

        let respuesta = { error: true, codigo: 200, mensaje: 'Usuario Eliminado' };
        response.send(respuesta);

    }
);

//app.use(
//  function(request, response) {
//      respuesta = { error: true, codigo: 400, mensaje: 'URL NO ENCONTRADA', resultado: usuario };
//      response.status(404).send(respuesta);
//  }
//)



app.listen(3010);