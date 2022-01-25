const express = require('express'); //express es el que hace accion de levantar el servicio rest paginas http//
const bodyParser = require('body-parser');
const insert = require('../operations/insert');
const grupoModel = require('../model/groups');
var app = express();
app.use(express.json());


//Inserta un grupo
app.post("/groups",
    function(request, response) {
        console.log("Insertando grupo nuevo");
        let grupoRequest = request.body;
        console.log("grupoRequest: " + grupoRequest);
        let nameRequest = grupoRequest.name;
        console.log("nameRequest: " + nameRequest);
        let grupo = grupoModel.createGroup(nameRequest);
        insert.insertGroup(grupo, response);
        console.log("Fin Insertando grupo nuevo");
    }
);

app.listen(3062);