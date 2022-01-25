let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "piezasmuseo"
});

connection.connect(function(err) {
    if (err) {
        console.log(error);
    } else {
        console.log("Conexion correcta");
    }
});








//SELECT piezas.nombreArte, status_pieza.localizacion , status_pieza.fecha_devolucion, collection.nombre_prestamista , collection.movil FROM piezas JOIN status_pieza ON(status_pieza.id_status = piezas.id_status) JOIN collection ON(collection.id_collection = piezas.id_collection)
//SELECT piezas.nombreArte, status_pieza.localizacion , status_pieza.fecha_devolucion, collection.nombre_prestamista , collection.movil FROM piezas JOIN status_pieza ON(status_pieza.id_status = piezas.id_status) JOIN collection ON(collection.id_collection = piezas.id_collection)

//obtener listado de los objetos  que el museo tiene en prestamo : SELECT descripcion FROM status_pieza
let sql = " SELECT descripcion FROM status_pieza";


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});

//SELECT piezas.nombre, collection.descripcion_prestamo FROM piezas JOIN collection ON(collection.id_collection = piezas.id_collection)
//localizacion dentro de la expocicion :SELECT * FROM tipo_almacenamiento
let sql = "SELECT piezas.nombreArte, status_pieza.localizacion FROM piezas JOIN status_pieza ON(status_pieza.id_status = piezas.id_status)";


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});
//SELECT piezas.nombreArte, status_pieza.localizacion , status_pieza.fecha_devolucion FROM piezas 
//JOIN status_pieza ON(status_pieza.id_status = piezas.id_status)
//fecha de expiracion :  SELECT fecha_devolucion FROM status_pieza

let sql = " SELECT fecha_devolucion FROM status_pieza ";


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});

//informacion basica de las personas que lo prestaron :SELECT * FROM collection

let sql = " SELECT * FROM collection ";


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});



//SELECT piezas.nombreArte, status_pieza.localizacion , status_pieza.fecha_devolucion, collection.nombre_prestamista , collection.movil FROM piezas JOIN status_pieza ON(status_pieza.id_status = piezas.id_status) JOIN collection ON(collection.id_collection = piezas.id_collection)
///////////////////
//*********************SELECT piezas.nombreArte, status_pieza.localizacion , status_pieza.fecha_devolucion, collection.nombre_prestamista , collection.movil FROM piezas JOIN status_pieza ON(status_pieza.id_status = piezas.id_status) JOIN collection ON(collection.id_collection = piezas.id_collection)



//2obtener de mayor a menor la lista de los objetos prestados :SELECT * FROM status_pieza Order by id_status DESC
//SELECT piezas.nombreArte, status_pieza.localizacion , status_pieza.id_status FROM piezas JOIN status_pieza ON(status_pieza.id_status =piezas.id_status)Order by id_status DESC

let sql = " SELECT * FROM status_pieza Order by id_status DESC ";


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});



//cuantos estan en expo cuantos almacenados  y en vigencia: SELECT nombre, id_status FROM piezas

let sql = " SELECT nombre, id_status FROM piezas ";


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});



//numero total de objetos prestados SELECT COUNT(*) FROM status_pieza

let sql = " SELECT COUNT(*) FROM status_pieza ";


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});

////SELECT piezas.nombreArte, status_pieza.localizacion , status_pieza.fecha_devolucion,piezas.id_ubicacion, collection.nombre_prestamista , collection.movil FROM piezas JOIN status_pieza ON(status_pieza.id_status = piezas.id_status) JOIN collection ON(collection.id_collection = piezas.id_collection)