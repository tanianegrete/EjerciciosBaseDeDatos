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




const PhotoSchema = new mongoose.Schema({
    nombreUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario1" },
    urlPhoto: String,
    titulo: String,
    descripcion: String

})

let PhotoModel = mongoose.model("Photo1", PhotoSchema);

const UsuarioSchema = new mongoose.Schema({
    login: String,
    password: String,
    name: String,
    surName: String,
    dateOfBirth: String,
    comments: String,
    rol: String,
    adrees: String,
    phone: String,
    email: String,
    follow: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario1" }],
    foto: [{ type: mongoose.Schema.Types.ObjectId, ref: "Photo1" }] //guarda los datos en un array
})

let UsuarioModel = mongoose.model("Usuario1", UsuarioSchema);
let referencias = []; //array vacio
/*
let foto = new PhotoModel({ nombreUsuario: "5f60b5045cedb35ee41f5d17", urlPhoto: "1", titulo: "fotoArbol", descripcion: "verde y muy alto" });
foto.save(function(err, res) { //guardar datos 
        if (err)
            console.log("Error: " + err)
        else {
            console.log("foto guardada correctamente");
            referencias.push(res._id); //guardamos segundo foto en array
            foto = new PhotoModel({ nombreUsuario: "5f60b5045cedb35ee41f5d17", urlPhoto: "2", titulo: "Cabaña", descripcion: "Cabaña en el bosque" });
            foto.save(function(err, res) { //guardar datos 
                if (err)
                    console.log("Error: " + err)
                else {
                    console.log("foto guardada correctamente");
                    referencias.push(res._id);
                    foto = new PhotoModel({ nombreUsuario: "5f60b5045cedb35ee41f5d17", urlPhoto: "3", titulo: "Cabaña", descripcion: "Cabaña en el bosque" });
                    foto.save(function(err, res) { //guardar datos 
                        if (err)
                            console.log("Error: " + err)
                        else {
                            referencias.push(res._id);

                            let usuario = new UsuarioModel({ login: "LalitaLaHuerfanita", password: "152", name: "Lola", surName: "Perez", dateOfBirth: "1.10", comments: "ninguno___", rol: "Mecanico", adrees: "Chapultepec", phone: "722668001", email: "andy@gmail", follow: "5f60b5045cedb35ee41f5d17", foto: referencias })
                            usuario.save(checkRespuesta);
                        }
                    })
                }
            })
        }
    })
    //OBTENER EL LISTADO  DE FOTOS DE UN USUARIO Y LOS DATOS DEL USUARIO
    /*UsuarioModel.findOne({ name: "Pedro" }) // busca 
        .populate('foto')
        .exec((err, usuario) => {
            if (err) {
                console.log(err);
                process.exit(-1);
            }
            console.log(`El usuario es:  ${usuario.name} sigue a  ${usuario.follow[0]} sus fotos son ${usuario.foto}  `);
            // console.log(artista);

        });*/

//Funcion de obtener timeline="cronologia" de un usuario por su id 
//mostrar foto de las personas a las que sigo


//  amigos.find({"Edad": {$gt: 25}},{Nombre:1, Apellidos:2})
//  return usuario.follow.foto

//crea una funcion  de obtener timeline  de un usuario por su id
function obtenerFotos(id) {
    UsuarioModel.findOne({ _id: id })
        .populate('usuario')
        .exec((err, usuario) => {
            if (err) {
                console.log(err);
                process.exit(-1);
                console.log(usuario.follow.foto);
            }
            // console.log(usuario.follow.foto);
            // console.log(artista);




            // UsuarioModel.find({ _id: id, },
            //     function(error, result) {

            //         if (error) {
            //             console.log(error);
            //         } else {
            //             console.log(`El usuario es:  ${.name} sigue a  ${.follow[0]} sus fotos son ${.follow.foto} `);
            //             // response.send(result);

            //         }
        });
}

obtenerFotos("5f60b5045cedb35ee41f5d17");