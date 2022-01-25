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




const LibroSchema = new mongoose.Schema({
    titulo: String,
    nPaginas: String

})

let LibroModel = mongoose.model("Libro1", LibroSchema);



const AutorSchema = new mongoose.Schema({
    nombre: String,
    edad: String,
    libro: [{ type: mongoose.Schema.Types.ObjectId, ref: "Libro1" }] //guarda los libros en un array

})

let AutorModel = mongoose.model("Autor", AutorSchema);
let referencias = []; //array vacio

let libro = new LibroModel({ titulo: "Mi primer Libro", nPaginas: "100" });

libro.save(function(err, res) { //guardas datos en el libro del autor
    if (err)
        console.log("Error: " + err)
    else {
        console.log("Metodo guardado correctamente");
        // console.log(res);
        referencias.push(res._id); //guardamos segundo libro en array 

        libro = new LibroModel({ titulo: "Mi Segundo Libro", nPaginas: "200" });
        libro.save(function(err, res) {
            if (err)
                console.log("Error: " + err)
            else {
                referencias.push(res._id)
                libro = new LibroModel({ titulo: "Mi Tercer Libro", nPaginas: "300" });
                // console.log("Metodo guardado correctamente"); 
                libro.save(function(err, res) {
                    if (err)
                        console.log("Error: " + err)
                    else {
                        referencias.push(res._id)
                        libro = new LibroModel({ titulo: "Mi Cuarto Libro", nPaginas: "400" });
                        libro.save(function(err, res) {
                            if (err)
                                console.log("Error: " + err)
                            else {
                                referencias.push(res._id)
                                let autor = new AutorModel({ nombre: "Pepin", edad: "201", libro: referencias })
                                    //   let autor = new AutorModel({ nombre: "Pepin", edad: "201", libro: res._id })
                                autor.save(checkRespuesta)

                            }

                        })

                    }


                })

            }
        })

    }

})



AutorModel.findOne({ nombre: "Pepin" }) // busca el primer autor con nombre Pepin
    .populate('libro')
    .exec((err, autor) => {
        if (err) {
            console.log(err);
            process.exit(-1);
        }
        console.log(`El autor ${autor.nombre} tiene ${autor.libro.titulo}`);
        console.log(autor);

    });