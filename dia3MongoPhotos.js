const mongoose = require("mongoose");


let Photos = mongoose.Schema;

const NombreEsquema = new Photos({
    nombreUsuario: {
        type: String,
        enum: ["TanMora", "Lola", "Pepito"]
    },

    urlPhoto: String,
    titulo: String,
    descripcion: String,

})