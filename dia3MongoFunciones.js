const mongoose = require("mongoose");
let Photos = require("./dia3MongoPhotos");
let User = require("./dia3MongoUser")
    //se debe de guardar la foto a la coleccion fotos



function subidaFotos(nombreUsuario, urlPhoto, titulo, descripcion, response) {


    let foto1 = new Photos({
        nombreUsuario: nombreUsuario,
        urlPhoto: urlPhoto,
        titulo: titulo,
        descripcion: descripcion,
    })

    foto1.save(function(error, result) {

        if (error) {
            console.log(error);
        } else {
            console.log("Foto subida " + "\n" + result);
            // mongoose.disconnect()
            response.send(result);
        }
    });

}


//dado un usuario obtener todas su fotos 

function obtenerFotos(nombreUsuario, response) {

    Photos.find({ nombreUsuario: nombreUsuario },
        function(error, result) {

            if (error) {
                console.log(error);
            } else {
                console.log("Todas las fotos Arriba " + "\n" + result);
                response.send(result);
                // mongoose.disconnect()
                // response.send(result);
            }
        });
}

//Eliminar Foto dado un usuario y titulo foto 

function eliminarFoto1(nombreUsuario, titulo, response) {
    Photos.findOneAndDelete({ nombreUsuario: nombreUsuario, titulo: titulo }, //findOneAndDelete=elimina una foto
        function(error, result) {
            if (error) {
                console.log("error");
            } else {
                console.log("eliminar foto");
                console.log(result);

                response.send(result);
                // mongoose.disconnect()
            }
        });
}


module.exports = {
    subidaFotos,
    obtenerFotos,
    eliminarFoto1
    //eliminarFotos
}


//eliminar todas las fotos

function eliminarFotos(nombreUsuario, response) {
    Photos.deleteMany({ nombreUsuario: nombreUsuario },
        function(error, result) {

            if (error) {
                console.log(error);
            } else {
                console.log("Elimina todas las fotos" + "\n");
                console.log(result);
                // mongoose.disconnect()
                response.send(result);
            }
        });
}









module.exports = {
    // subidaFotos,
    // obtenerFotos,
    // eliminarFoto1,
    eliminarFotos

}






//DADO UN USUARIO ORIGEN Y OTRO DESTINO HACER QUE SIGA A DESTINO


function seguir(nombre1, sigueme, response) {

    User.updateOne({ name: nombre1 }, { follow: sigueme }, // si tiene el nombre tania el primer valor cambia el valor de follow por sigue nuevo
        function(error, result) {

            if (error) {
                console.log(error);
            } else {
                console.log("Actualizar seguimiento " + "\n" + result);
                //  mongoose.disconnect()
                response.send(result);
            }
        });
}
//dejar de seguir

function dejarSeguir(nombre, follow, response) {

    User.updateOne({ name: nombre }, { follow: null }, // si tiene el nombre tania y sigue justine cambia por null
        function(error, result) {

            if (error) {
                console.log(error);
            } else {
                console.log("Deja de seguir " + "\n");
                console.log(result);
                // mongoose.disconnect();
                response.send(result);
            }
        });
}

module.exports = { seguir, dejarSeguir }