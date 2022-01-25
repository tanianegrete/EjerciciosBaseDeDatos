let mongoose = require("mongoose");

let User = require("./dia3MongoUser"); //importar User 



mongoose.connect('mongodb://localhost:27017/dia3Mongo', { useNewUrlParser: true, useUnifiedTopology: true });


let user = new User({
    login: "TaniaS",
    password: "1234567",
    name: "Tania",
    surname: "Morales Negrete",
    dateOfBirth: "1 Octubre",
    comments: "ninguno",
    rol: "milUsos",
    adrees: "Av menendez Pelayo",
    phone: "5487963",
    email: "taniPelosLacios@gmail",
    follow: "Justine"

});

user.save(checkRespuesta) //para guardar datos 



function checkRespuesta(err, res) {
    if (err) console.log("Error: " + err)
    else {
        console.log("Modelo guardado correctamente")
        mongoose.disconnect();
    }
}