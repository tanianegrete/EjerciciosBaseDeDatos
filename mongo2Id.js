const mongoose = require("mongoose");
//const { profile } = require('console');
//const {NombreEsquema} = mongosse;

let UserId = mongoose.Schema;

const NombreEsquema = new UserId({
    login: {
        type: String,
        enum: "TanMora"
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

})

module.exports = mongoose.model("UserId", NombreEsquema, "mongoMiercoles");


/*const NombreEsquema2 = new Profile({
    name = String,
    surname = String,
    dateOfBirth = String,
    comments = String,
    rol = String

});


const NombreEsquema3 = new Creedentials({
    adrees = String,
    phone = Number,
    email = String
});


let userId = new UserId({
    login = "TanMora",
    password = "1234567",

})

let profile = new Profile({
    name = "Tania ",
    surname = "Morales Negrete ",
    dateOfBirth = "1 Octubre",
    comments = "ninguno",
    rol = "milUsos"

})

let creedentials = new Creedentials({
        adrees = "Av menendez Pelayo",
        phone = 51,
        email = "taniPelosLacios@gmail"

    })
    //validacion

const NombreEsquema = new UserId({
    login: {
        type: String,
        enum: "TanMora"
    },

    password: {
        type: String,
        validate: [
            function(password) {
                return password.length <= 6;
            },
            'Introduce un password con mas de 6 caracteres'
        ]

    },

})


const NombreEsquema1 = new Profile({
    name: {
        type: String,
        enum: "Tania"
    },

    surName: {
        type: String,
        enum: "Morales Negrete"
    },

    dateOfBirth: {
        type: String,
        enum: "1 Octubre"
    },

    comments = Sting,

    rol: {
        type: String,
        enum: " milUsos"
    },

})

const NombreEsquema3 = new Creedentials({

    adrees = String,

    phone: {
        type: String,
        validate: [
            function(phone) {
                return phone.length == 7;
            },
            'Introduce un numero telefonico con 7 caracteres'
        ]

    },
    email = String
});






*/