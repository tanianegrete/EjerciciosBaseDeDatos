const mongoose = require("mongoose");

let Profile = mongoose.Schema;

const NombreEsquema1 = new Profile({
    name: {
        type: String,
        enum: ["Tania", "Agapito", "Lucha"]
    },

    surName: {
        type: String,
        enum: "Morales Negrete"
    },

    dateOfBirth: {
        type: String,
        enum: "1 Octubre"
    },

    comments: String,

    rol: {
        type: String,
        enum: "milUsos"
    },

});

module.exports = mongoose.model("Profile", NombreEsquema1);