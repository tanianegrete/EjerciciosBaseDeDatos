let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "codenotch"
});

connection.connect(function(err) {
    if (err) {
        console.log(error);
    } else {
        console.log("Conexion correcta");
    }
});

let sql = "CREATE TABLE Colegio1 (id INT AUTO_INCREMENT PRIMARY KEY, Alumnos VARCHAR(200), Profesor VARCHAR(200), Asignaturas VARCHAR(200), RetosPendientes INT(2))";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Tabla creada");
        console.log(result);
    }
});


/*let sql = "CREATE TABLE Alumnos (id INT AUTO_INCREMENT PRIMARY KEY, Nombre VARCHAR(200), Apellidos VARCHAR(200), Direccion VARCHAR(200))";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Tabla creada");
        console.log(result);
    }
});*/
/*
let sql = "CREATE TABLE Profesor (id INT AUTO_INCREMENT PRIMARY KEY, Nombre VARCHAR(200), Apellidos VARCHAR(200), Turno VARCHAR(200))";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Tabla creada");
        console.log(result);
    }
});
*/
/*
let sql = "CREATE TABLE Asignatura (id INT AUTO_INCREMENT PRIMARY KEY, Nombre VARCHAR(200), Duracion VARCHAR(200))";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Tabla creada");
        console.log(result);
    }
});
*/
/*
let sql = "CREATE TABLE RetosPendientes (id INT AUTO_INCREMENT PRIMARY KEY, Modulo1 VARCHAR(200), Modulo2 VARCHAR(200), Modulo3 VARCHAR(200), Modulo4 VARCHAR(200), Modulo5 VARCHAR(200))";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Tabla creada");
        console.log(result);
    }
});
*/

//añade columna nueva
//ALTER TABLE dbo.doc_exa ADD column_b VARCHAR(20) NULL, column_c INT NULL ;
/*
sql = "ALTER TABLE RetosPendientes ADD COLUMN ColumnaACreadaCodigo VARCHAR(200)";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Tabla creada");
        console.log(result);
    }
});
*/
//Eliminar columna de la tabla colegi1 la columna RetosPendientes.
//DROP COLUMN _____= ALTER TABLE dbo.doc_exb DROP COLUMN column_b;

/*
sql = "ALTER TABLE Colegio1 DROP COLUMN RetosPendientes ";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Tabla creada");
        console.log(result);
    }
});
*/

sql = "DROP TABLE Colegio1 ";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Tabla creada");
        console.log(result);
    }
});