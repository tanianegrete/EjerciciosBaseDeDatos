//Principio ApiRest
const express = require('express'); //express es el que hace accion de levantar el servicio rest paginas http//
const bodyParser = require('body-parser');
var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "dia2"
});


connection.connect(function(err) {
    if (err) {
        console.log(error);
    } else {
        console.log("Conexion correcta");
    }
});

//Obten el dato de los alumnos por el id  pasado por parametro

app.get("/peliculas",
    function(request, response) {
        console.log("getPeliculas");
        let pelicula = find.devuelvePeliculas(response);
    }
);












//Final api rest
app.use(
    (req, res, next) => {
        let respuesta = { error: true, codigo: 404, mensaje: "Url no encontrada" };
        res.status(404).send(respuesta);
        //next();
    }
);
app.listen(3000, function() {
    console.log("‘Server is running..");
});

app.listen(3060);