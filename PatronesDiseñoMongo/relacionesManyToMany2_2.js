//muchos kilos de platanos
//muchos monos
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




const FrutasSchema = new mongoose.Schema({
    tipo: String,
    color: String,
    animales: [{ type: mongoose.Schema.Types.ObjectId, ref: "AnimalesMuchos" }]


})

let FrutasModel = mongoose.model("FrutasMuchas", FrutasSchema);



const AnimalesSchema = new mongoose.Schema({
    nombre: String,
    edad: String,
    frutas: [{ type: mongoose.Schema.Types.ObjectId, ref: "FrutasMuchas" }] //guarda los platanos en un array

})

let AnimalesModel = mongoose.model("AnimalesMuchos", AnimalesSchema);


let fruta = new FrutasModel({ tipo: "Platanos", color: "amarillo", animales: ["5f5f9d19536e285ec8d4d383", "5f5f9d19536e285ec8d4d384"] });
fruta.save(checkRespuesta);

fruta = new FrutasModel({ tipo: "Manzana", color: "roja", animales: ["5f5f9d19536e285ec8d4d383", "5f5f9d19536e285ec8d4d385"] });
fruta.save(checkRespuesta);

fruta = new FrutasModel({ tipo: "Pera", color: "verde", animales: ["5f5f9d19536e285ec8d4d384", "5f5f9d19536e285ec8d4d385"] });
fruta.save(checkRespuesta);

fruta = new FrutasModel({ tipo: "Pepino", color: "rosa", animales: ["5f5f9d19536e285ec8d4d383", "5f5f9d19536e285ec8d4d384"] });
fruta.save(checkRespuesta);


let animal = new AnimalesModel({ nombre: "mono", edad: "5 ", frutas: ["5f5f9d19536e285ec8d4d37f", "5f5f9d19536e285ec8d4d381"] })
animal.save(checkRespuesta);

animal = new AnimalesModel({ nombre: "Tortuga", edad: "100 ", frutas: ["5f5f9d19536e285ec8d4d380", "5f5f9d19536e285ec8d4d382"] })
animal.save(checkRespuesta);

animal = new AnimalesModel({ nombre: "Delfin", edad: "15 ", frutas: ["5f5f9d19536e285ec8d4d380", "5f5f9d19536e285ec8d4d382"] })
animal.save(checkRespuesta);

animal = new AnimalesModel({ nombre: "Perro", edad: "20 ", frutas: ["5f5f9d19536e285ec8d4d37f", "5f5f9d19536e285ec8d4d381"] })
animal.save(checkRespuesta);

/*
FrutasModel.findOne({ tipo: "Platanos" })
    .populate('animales')
    .exec(function(err, frutas) {
        if (err) {
            console.log(err);

        }
        console.log(`La fruta: ${frutas.tipo} tiene ${frutas.animales}`);
        console.log(frutas);
        mongoose.disconnect();

    });
/*
AnimalesModel.findOne({ nombre: "mono" })
    .populate('frutas')
    .exec(function(err, animales) {
        if (err) {
            console.log(err);

        }
        console.log(`El animal es: ${animales.nombre} tiene ${animales.frutas[0]}`);
        console.log(animales);
        mongoose.disconnect();

    });
*/