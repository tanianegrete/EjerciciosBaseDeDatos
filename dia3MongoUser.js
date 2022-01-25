const mongoose = require("mongoose");


let User = mongoose.Schema;

const NombreEsquema = new User({
    login: {
        type: String,
        enum: ["TaniaS", "AgapitoS", "LuchaS"]
    },

    password: {
        type: String,
        validate: [
            function(password) {
                return password.length >= 6;
            },
            'Introduce un password con mas de 6 caracteres'
        ]

    },

    name: String,



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
    follow: String,



})

module.exports = mongoose.model("User", NombreEsquema);