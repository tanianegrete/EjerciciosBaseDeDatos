const connectionFunction = require("../connection/connection");
let connection = connectionFunction.devuelveConnnection();

function insertSubjectDummy() {
    let sql = "INSERT INTO subjects  (title) VALUES ( 'Palateria')"; //insertar materias

    connection.query(sql, function(err, result) {
        if (err) {
            console.log("Ocurrio un error al crear materia: " + err);
        } else {
            console.log("Creada materia " + result);
        }
    });

    sql = "INSERT INTO groups  (name) VALUES ( 'Palateria 2')"; //insertar materias

    connection.query(sql, function(err, result) {
        if (err) {
            console.log("Ocurrio un error al crear materia: " + err);
        } else {
            console.log("Creada materia " + result);
        }
    });
}

insertSubjectDummy();