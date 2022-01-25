const connectionFunction = require("../connection/connection");
let connection = connectionFunction.devuelveConnnection();


function insertGroupDummy() {
    console.log("Conexion: " + connection);
    let sql = "INSERT INTO groups  (name) VALUES ( 'Grupo I')"; //insertar materias     
    connection.query(sql, function(err, result) {
        if (err) {
            console.log("Ocurrio un error al crear materia: " + err);
        } else {
            console.log("Creada materia " + result);
        }
    });

    sql = "INSERT INTO groups  (name) VALUES ( 'Grupo II')"; //insertar materias

    connection.query(sql, function(err, result) {
        if (err) {
            console.log("Ocurrio un error al crear materia: " + err);
        } else {
            console.log("Creada materia " + result);
        }
    });
}

insertGroupDummy();