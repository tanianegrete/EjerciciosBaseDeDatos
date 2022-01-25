const mongoose = require("mongoose"); //documentacion mongoose: mongoosejs.com
const url = "mongodb://localhost:27017/IMDB"; //ubicacion de la base de datos mongo
const db = mongoose.connection; // coneccion del lenguaje
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); //lo sacamos de consola
db.once("open", _ => { // solo  me mostrara el mensaje de conexion cada vez que me conecte 
    console.log("Conexion a base de datos exitosa: " + url);
});

db.on("disconnecting", _ => { // solo  me mostrara el mensaje de conecxion cada vez que me conecte 
    console.log("Fuera de base de datos: " + url);
});


db.on("error", err => { //  evento error 
    console.log("A ocurrido un error en la conexion : " + err);
});