const express = require('express');
const bodyParser = require('body-parser');
//const { response } = require('express');
const app = express();

const Movie = require("../peliculaApi");
const Professional = require("../professional");
const { request } = require('express');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// let movi1 = null;
// let arraymovis = [];
let actor1 = new Professional(" Sandra Bullon.", 45, " Femenino.", 60, 120, " Castaño.", " Oscuro", " Actriz.", true, " Americanos", 4, "actriz", "imgPelis/actor1.jpg");
let actor2 = new Professional("Brad pitt.", 55, " Masculino.", 80, 180, " Castaño.", " Marron.", "Actor.", true, "Americano", 1, "actor", "imgPelis/actor2.jpg");
let professional1 = new Professional(" Quentin Tarantino.", 70, " Masculino.", 90, 178, " Castaño.", " Oscuro.", " Director.", true, " Ingleses. ", 8, "director", "imgPelis/professional1.jpeg");
let professional3 = new Professional(" Brandon Prot.", 51, " Masculino.", 80, 180, " Rubio. ", " Azules.", " Guionista ", true, " Franceses", 5, "guionista", "imgPelis/professional3.jpg");


let movie1 = new Movie("El rey leon.", 1992, "Inglesa", "Infantil");
movie1.lenguaje = "Español ";
movie1.plataform = "Netflix";
movie1.isMCU = true;
movie1.mainCharacterName = "Simba"
movie1.producer = "Paola Rojas"
movie1.distributor = "Francisco Lopez"
movie1.actors = [actor1, actor2];
movie1.director = professional1
movie1.writer = professional3


/*let id = request.params.id;
if (id < arrayProfesional.length)
    response.send(arrayProfesional[id]);*/
app.get("/pelicula",
    function(request, response) {
        response.send(movie1);
    }
);

app.get("/pelicula/actor", // devuelve los datos de los autores de la pelicula
    function(request, response) {

        response.send(movie1.actors);

    }

);

app.get("/pelicula/actor", // devuelve los datos de los autores de la pelicula dependiendo id 
    function(request, response) {

        response.send(movie1.actors[request.query.id]);

    }

);

app.get("/pelicula/director", // devuelve los datos del director de la pelicula
    function(request, response) {
        response.send(movie1.director);

    });

app.get("/pelicula/guionista", //devuelve los  datos del guionista de la pelicula
    function(request, response) {
        response.send(movie1.writer);

    });


app.post("/peliculas/actor", //añade un actor en la lista de la pelicula
    function(request, response) {
        let actorTodos = new Professional(request.body.name, request.body.age, request.body.genre, request.body.weigtht, request.body.height, request.body.hairColor, request.body.hairColor, request.body.race, request.body.isRetired);
        let respuesta1 = movi1.actors.push(actorTodos);
        response.send(respuesta1 + "Actor Creado");

    });

app.post("/peliculas/director", //añade director  en la pelicula
    function(request, response) {
        let actorTodos = new Professional(request.body.name, request.body.age, request.body.genre, request.body.weigtht, request.body.height, request.body.hairColor, request.body.hairColor, request.body.race, request.body.isRetired);
        let respuesta1 = movi1.director.push(actorTodos);
        response.send(respuesta1 + "Director  Creado");

    });

app.post("/peliculas/guionista", //añade director  en la guionista de la pelicula
    function(request, response) {
        let actorTodos = new Professional(request.body.name, request.body.age, request.body.genre, request.body.weigtht, request.body.height, request.body.hairColor, request.body.hairColor, request.body.race, request.body.isRetired);
        let respuesta1 = movi1.writer.push(actorTodos);
        response.send(respuesta1 + "Guionista Creado");

    });

app.put("/pelicula/autor", // modifica los datos de un autor
    function(request, response) {
        movi1.actors.actor1 = request.body.movie1.actors.actor1;
        movi1.actors.actor2 = request.body.movie1.actors.actor2;


        let respuesta = { error: true, codigo: 200, mensaje: ' Actualizado  Actor' };
        response.send(respuesta);
    }
);

app.put("/pelicula/autor", // modifica los datos de un director
    function(request, response) {

        movi1.director = request.body.movie1.director;


        let respuesta = { error: true, codigo: 200, mensaje: ' Actualizado Director' };
        response.send(respuesta);
    }
);



app.put("/pelicula/guionista", // modifica los datos de guionista
    function(request, response) {
        movi1.writer = request.body.movie1.writer;



        let respuesta = { error: true, codigo: 200, mensaje: ' Actualizado Guionista' };
        response.send(respuesta);
    }
);














/*app.get("/pelicula/actor/:id", //devuelve los datos relativos de ese actor con ese id
    function(request, response) {
        response.send(arraymovis);
    }
);

app.get("/pelicula/director", // devuelve los datos relativos del director
    function(request, response) {
        let respuesta = { error: true, codigo: 200, mensaje: 'punto de inicio peliculas' };
        response.send(respuesta);
    }
);

/*app.get("/pelicula/guionionista", // devuelve los datos del guionista de la pelicula
    function(request, response) {
        let respuesta = { error: true, codigo: 200, mensaje: 'punto de inicio peliculas' };
        response.send(respuesta);
    }
);*/



/*app.post("/peliculas/actor",
    function(request, response) {
        let actorTodos = new Professional(request.body.name, request.body.age, request.body.genre, request.body.weigtht, request.body.height, request.body.hairColor, request.body.hairColor, request.body.race, request.body.isRetired);
        let respuesta1 = movi1.actors.push(actorTodos);
        response.send(respuesta1 + "Actor Creado");

    });*/










app.listen(3030);