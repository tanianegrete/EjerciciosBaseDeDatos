let mongoose = require("mongoose");
let funciones = require("./dia3MongoFunciones");




mongoose.connect('mongodb://localhost:27017/dia3Mongo', { useNewUrlParser: true, useUnifiedTopology: true });


//funciones.subidaFotos("TanMora", "urlPhoto", "titulo", " descripcion");

//funciones.obtenerFotos("Pepito");

//funciones.seguir();
//funciones.dejarSeguir();
//funciones.eliminarFoto1();