let mongoose = require("mongoose");
let UserId = require("./mongo2Id");
let Profile = require("./mongo2Perfil"); //importar profile
let Creedentials = require("./mongo2Credentials");


mongoose.connect('mongodb://localhost:27017/dia2Mongo', { useNewUrlParser: true, useUnifiedTopology: true });


let userId = new UserId({
    login: "TanMora",
    password: "1234567",

});
userId.save(checkRespuesta) //para guardar datos 


let profile = new Profile({
    name: "Tania",
    surname: "Morales Negrete",
    dateOfBirth: "1 Octubre",
    comments: "ninguno",
    rol: "milUsos"

});
profile.save(checkRespuesta) //para guardar datos 

let creedentials = new Creedentials({
    adrees: "Av menendez Pelayo",
    phone: "5487963",
    email: "taniPelosLacios@gmail"

});

function checkRespuesta(err, res) {
    if (err) console.log("Error: " + err)
    else {
        console.log("Modelo guardado correctamente")
            // mongoose.disconnect();
    }
}
creedentials.save(checkRespuesta); //para guardar datos