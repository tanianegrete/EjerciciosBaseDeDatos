const express = require('express'); //express es el que hace accion de levantar el servicio rest paginas http//
const bodyParser = require('body-parser');
const find = require('../operacionesMetodos/find'); // se enlaza en las operaciones metodos para ejecutar 
const save = require('../operacionesMetodos/saveAndUpdate');
const eliminar = require('../operacionesMetodos/delete');
var app = express();
app.use(express.json());


//devuelve un profesional
app.get("/profesionales/:id",
    function(request, response) {
        console.log("getprofesionales_id");
        let profesionalA = request.params.id;
        let profesionista = find.devuelveUnProfesional(profesionalA, response);
        console.log("id" + profesionalA);
    }
);


//devuelve todos los profesionales
app.get("/profesionales",
    function(request, response) {
        console.log("getProfesionales");
        let profesionista = find.devuelveTodosProfesionales(response);
    }
);

//añade un profesional en la lista de profesionales
app.post("/profesionales",
    function(request, response) {
        let nuevoProfesional = request.body;
        let profesionista = save.nuevoProfesional(nuevoProfesional, response);
    }
);

////Modifica ( actualizalos datos de un profesional

app.put("/profesionales",
    function(request, response) {
        let idProfesional = request.body; //todos los datos de profesional 
        let profesional = save.modificaProfesional(idProfesional, response);
    }
);


//Elimina un profesional
app.delete("/profesionales",
    function(request, response) {
        let idProfesional = request.body.id; //recibo toda la pelicula
        let profesional = eliminar.eliminarProfesional(idProfesional, response);
    }
);




app.listen(3061);