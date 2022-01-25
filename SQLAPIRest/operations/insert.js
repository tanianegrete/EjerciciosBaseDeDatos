const connectionFunction = require("../connection/connection");
let connection = connectionFunction.devuelveConnnection();

function insertGroup(group, response) {
    let sql = "INSERT INTO groups  (name) VALUES ( '" + group.name + "')"; //insertar materias     
    //INSERT INTO groups  (name,apellidos) VALUES ( 'cesar','palafox')
    console.log("Query SQL:  " + sql);
    connection.query(sql, function(err, result) {
        if (err) {
            console.log("Ocurrio un error al crear materia: " + err);
        } else {
            console.log("Group created " + result);
            response.send(result);
        }
    });

}

module.exports = {
    insertGroup
}