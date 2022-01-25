const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let usuario = { nombre: "", apellido: "" };

app.get("/",
    function(request, response) {
        let respuesta = { error: true, codigo: 200, mensaje: 'punto de inicio' };
        response.send(respuesta);
    }
);

app.get("/usuario",
    function(request, response) {
        response.send(usuario);
    }
);

app.get("/usuario/:name",
    function(request, response) {
        let name = request.params.name
        if (!name || name === usuario.nombre)
            response.send(usuario);
        else
            response.send({ error: true, codigo: 200, mensaje: 'el usuario no existe' });
    }
);

app.post("/usuario",
    function(request, response) {
        usuario.nombre = request.body.nombre1;
        usuario.apellido = request.body.apellido1;

        let respuesta = { error: true, codigo: 200, mensaje: 'Usuario creado', resultado: usuario };
        response.send(respuesta);
    }
);

app.put("/usuario",
    function(request, response) {
        usuario.nombre = request.body.nombre1;
        usuario.apellido = request.body.apellido1;

        let respuesta = { error: true, codigo: 200, mensaje: 'Usuario Actualizado', resultado: usuario };
        response.send(respuesta);
    }
);

app.delete("/usuario",
    function(request, response) {
        usuario.nombre = "";
        usuario.apellido = "";

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



app.listen(3004);