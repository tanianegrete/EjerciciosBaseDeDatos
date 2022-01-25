//Relacion de uno con muchos
//un artista con muchos discos

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




const DiscoSchema = new mongoose.Schema({
    titulo: String,
    nCanciones: String

})

let DiscoModel = mongoose.model("Disco1", DiscoSchema);



const ArtistaSchema = new mongoose.Schema({
    nombre: String,
    edad: String,
    disco: [{ type: mongoose.Schema.Types.ObjectId, ref: "Disco1" }] //guarda los discos en un array

})

let ArtistaModel = mongoose.model("Artistas", ArtistaSchema);
let referencias = []; //array vacio
/*
let disco = new DiscoModel({ titulo: "Mi primer Disco", nCanciones: "15" });

disco.save(function(err, res) { //guardar datos en el disco del autor
    if (err)
        console.log("Error: " + err)
    else {
        console.log("Disco guardado correctamente");
        console.log(res);
        referencias.push(res._id); //guardamos  DISCO en array 

        disco = new DiscoModel({ titulo: "Mi Segundo Disco", nCanciones: "20" });
        disco.save(function(err, res) {
            if (err)
                console.log("Error: " + err)
            else {
                referencias.push(res._id)
                disco = new DiscoModel({ titulo: "Mi Tercer Disco", nCanciones: "30" }); // console.log("Metodo guardado correctamente"); 
                disco.save(function(err, res) {
                    if (err)
                        console.log("Error: " + err)
                    else {
                        referencias.push(res._id)
                        disco = new DiscoModel({ titulo: "Mi Cuarto Disco", nCanciones: "40" });
                        disco.save(function(err, res) {
                            if (err)
                                console.log("Error: " + err)
                            else {
                                referencias.push(res._id)
                                let artista = new ArtistaModel({ nombre: "Mozart", edad: "68", disco: referencias })
                                artista.save(checkRespuesta)

                            }

                        })

                    }


                })

            }
        })

    }

})

*/

ArtistaModel.findOne({ nombre: "Mozart" }) // busca el primer artista
    .populate('disco')
    .exec((err, artista) => {
        if (err) {
            console.log(err);
            process.exit(-1);
        }
        console.log(`El artista ${artista.nombre} creó ${artista.disco[0].titulo}`);
        // console.log(artista);

    });