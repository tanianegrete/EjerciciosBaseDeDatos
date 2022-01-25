const express = require('express'); //express es el que hace accion de levantar el servicio rest paginas http//
const bodyParser = require('body-parser');
const find = require('../operations/find'); // se enlaza en las operaciones metodos para ejecutar 
const save = require('../operations/saveAndUpdate'); //operaciones save
const remove = require('../operations/remove'); //del archivo de eliminar pelicula
var app = express();
app.use(express.json());

app.get("/peliculas",
    function(request, response) {
        console.log("getPeliculas");
        let pelicula = find.devuelvePeliculas(response);
    }
);

app.get("/peliculas/:id",
    function(request, response) {
        console.log("getPeliculas_id");
        let idPelicula = request.params.id;
        let pelicula = find.devuelveUnaPelicula(idPelicula, response);
        console.log("id" + idPelicula);
    }
);


app.get("/pelicula/actor/:id",
    function(request, response) {
        console.log("getActores_id");
        let idPelicula = request.params.id;
        let pelicula = find.devuelveActores(idPelicula, response);
        console.log("id" + idPelicula);
    }
);




app.get("/pelicula/director/:id",
    function(request, response) {
        console.log("getDirectores_id");
        let idPelicula = request.params.id;
        let pelicula = find.devuelveDirectores(idPelicula, response);
        console.log("id" + idPelicula);
    }
);




app.get("/pelicula/guionista/:id",
    function(request, response) {
        console.log("getGuionista_id");
        let idPelicula = request.params.id;
        let pelicula = find.devuelveGuionista(idPelicula, response);
        console.log("id" + idPelicula);
    }
);

app.get("/pelicula/productora/:id",
    function(request, response) {
        console.log("getProductora_id");
        let idPelicula = request.params.id;
        let pelicula = find.devuelveProductora(idPelicula, response);
        console.log("id" + idPelicula);
    }
);


app.post("/peliculas",
    function(request, response) {
        let idPelicula = request.body;
        let pelicula = save.insertarPelicula(idPelicula, response);
    }
);


app.post("/pelicula/actor",
    function(request, response) {
        let idPelicula = request.body.id;
        let actornuevo = request.body.actor;
        let pelicula = save.nuevoActoraPelicula(idPelicula, actornuevo, response);
    }
);


app.post("/pelicula/director",
    function(request, response) {
        let idPelicula = request.body.id;
        let directornuevo = request.body.director;
        let pelicula = save.nuevoDirectoraPelicula(idPelicula, directornuevo, response);
    }
);



app.post("/pelicula/escritor",
    function(request, response) {
        let idPelicula = request.body.id;
        let escritornuevo = request.body.escritor;
        let pelicula = save.nuevoEscritorPelicula(idPelicula, escritornuevo, response);
    }
);



//ACTUALIZAR DATOS DE PELICULA:

app.put("/peliculas",
    function(request, response) {
        let idPelicula = request.body; //recibo toda la pelicula
        let pelicula = save.peliculaActualizada(idPelicula, response);
    }
);

//Eliminar PELICULA:

app.delete("/peliculas",
    function(request, response) {
        let idPelicula = request.body.id; //recibo toda la pelicula
        let pelicula = remove.eliminarPelicula(idPelicula, response);
    }
);


//Eliminar PELICULA actor:

app.delete("/pelicula/actor",

    function(request, response) {
        console.log("eliminaA")
        let idPelicula = request.body.id; //recibo el id de potsman
        console.log("eliminaB")
        let actor = request.body.actor; //recibo de potsman
        console.log("eliminaC")
        let pelicula = remove.eliminaActor(idPelicula, actor, response); //le envio a la funcion


    }
);



//Elimina dierector de una PELICULA:

app.delete("/pelicula/director",
    function(request, response) {
        let idPelicula = request.body.id; //recibo el id de potsman
        let director = request.body.director; //recibo de potsman
        let pelicula = remove.eliminaDirector(idPelicula, director, response); //le envio a la funcion


    }
);

//eliminar Guinista

app.delete("/pelicula/guionista",
    function(request, response) {
        let idPelicula = request.body.id; //recibo el id de potsman
        let guionista = request.body.guionista; //recibo de potsman
        let pelicula = remove.eliminaDirector(idPelicula, guionista, response); //le envio a la funcion


    }
);


app.listen(3060);