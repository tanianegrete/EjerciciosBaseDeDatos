let mysql = require("mysql");

function devuelveConnnection() {
    let connection = null;
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: null,
        database: "dia2"
    });

    connection.connect(function(err) {
        if (err) {
            console.log("Error al conectar a la base de datos: " + err);
            connection = null;
        } else {
            console.log("Conexion correcta");
        }
    });

    return connection;
}

module.exports = {
    devuelveConnnection
}