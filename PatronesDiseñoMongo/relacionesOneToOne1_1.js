//un auto y un conductor



let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/PatronesDiseñoMongo', { useNewUrlParser: true, useUnifiedTopology: true });


function checkRespuesta(err, res) {
    if (err) console.log("Error: " + err)
    else {
        console.log("Metodo guardado correctamente");
        console.log(res);
        mongoose.disconnect();
    }
}




const AutoSchema = new mongoose.Schema({
    modelo: String,
    color: String

})

let AutoModel = mongoose.model("Auto1", AutoSchema);



const PilotoSchema = new mongoose.Schema({
    nombre: String,
    edad: String,
    auto: { type: mongoose.Schema.Types.ObjectId, ref: "Auto1" } //guarda los datos en auto

})

let PilotoModel = mongoose.model("Piloto1", PilotoSchema);


let auto = new AutoModel({ modelo: "Mercedes", color: "Rojo" });
auto.save(function(err, res) {
    if (err)
        console.log("Error: " + err)
    else {
        console.log("Metodo realizado correctamente")
        console.log(res);


        let piloto = new PilotoModel({ nombre: "Oscar RAPIDIN", edad: "30", auto: res._id })
        piloto.save(checkRespuesta)

    }

});