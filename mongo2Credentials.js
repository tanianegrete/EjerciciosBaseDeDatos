const mongoose = require("mongoose");

let Creedentials = mongoose.Schema;

const NombreEsquema3 = new Creedentials({

    adrees: String,

    phone: {
        type: String,
        validate: [
            function(phone) {
                return phone.length == 7;
            },
            'Introduce un numero telefonico con 7 caracteres'
        ]

    },
    email: String,
});

module.exports = mongoose.model("Creedentials", NombreEsquema3);