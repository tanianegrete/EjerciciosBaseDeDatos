let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "dia2"
});

connection.connect(function(err) {
    if (err) {
        console.log(error);
    } else {
        console.log("Conexion correcta");
    }
});

//crear grupos
//INSERT INTO groups(`name`) VALUES ("grupo1");//crear grupo1
/*
let sql = "INSERT INTO groups  (name) VALUES ( 'Grupo 10')"; //insertar materias

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Grupo creada");
        console.log(result);
    }
});



*/


///CREAR MATERIAS
//let sql = INSERT INTO `subjects` (`subject_id`, `title`) VALUES (NULL, 'JS'), (NULL, 'SQL'); //CREAR UNA MATERIA NUEVA
/*
let sql = "INSERT INTO  subjects (subject_id, title) VALUES (NULL, 'Java')"; //insertar materias

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Materia creada");
        console.log(result);
    }
});
*/

/*

//crear alumno
//INSERT INTO `students` (`students_id`, `first_name`, `last_name`, `group_id`) VALUES (NULL, 'Dani', 'Torres', '1');//crear alumno con grupo
let sql = "INSERT INTO  students (`students_id`, `first_name`, `last_name`, `group_id` ) VALUES (NULL, 'Tania','Morales',10)"; //insertar materias

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("ALUMNO CREADO");
        console.log(result);
    }
});

*/
/*
//crear Profe
//INSERT INTO `teachers` (`teacher_id`, `first_name`, `last_name`) VALUES (NULL, 'Pepito', 'Noexiste');//insertar teacher
let sql = " INSERT INTO teachers (`teacher_id`, `first_name`, `last_name`) VALUES (NULL, 'Doris', 'Martinez')"; //insertar materias

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("PROFESOR CREADO");
        console.log(result);
    }
});
*/
/*
//crear  marks
//INSERT INTO "INSERT INTO marks (date) VALUES ('2020-09-15')";
let sql = " INSERT INTO marks (`mark_id`,`students_id`, `subject_id`, `date`,  `mark` ) VALUES (NULL, 20, 24, '2019-12-24',5)"; //insertar materias

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("MARKS CREADAS");
        console.log(result);
    }
});

/*

//INSERTAR IDS
//INSERT INTO `subject_teacher` (`subject_id`, `teacher_id`, `group_id`) VALUES ('20', '2', '2'), ('24', '3', '6');
let sql = " INSERT INTO subject_teacher ( `teacher_id`, `group_id`) VALUES ( 22, 2)";

connection.query(sql, function(err, result) {
    if (err) {
        console.log("El error es :" + err);
    } else {
        console.log("Inseretar ids");
        console.log(result);
    }
});

*/




/////////////////RETO2

//setear todas las notas de los alumnos a 0


/*
let sql = "UPDATE  marks SET mark=0 ";
connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("aprovado");
        console.log(result);
    }
});


*/





/*
//OBTENER EL NOMBRE Y EL PRIMER APELLIDO DE LOS ESTUDIANTES
let sql = "SELECT first_name, last_name FROM students";
connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Datos de alumno:");
        console.log(result);
    }
});

*/
/*
//OBTENER TODOS LOS  DATOS DE LOS PROFESORES
let sql = "SELECT * FROM teachers";
connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Datos de profesores:");
        console.log(result);
    }
});

*/

///////////////RETO3 INSERTAR A TABLAS DATOS 



/*
let sql = "INSERT INTO  subjects (subject_id, title) VALUES (NULL, 'DIBUJO')"; //insertar materias

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Materia creada");
        console.log(result);
    }
});
*/

//reto 4 eliminar de la base de datos todas las notas cuya fecha tenga mas de 10 años.
//"DELETE mark FROM marks WHERE date < 2010-01-01";
/*
let sql = "DELETE FROM marks WHERE date<'2010-01-01'";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Fechas eliminadas");
        console.log(result);
    }
});
*/

//let sql = " INSERT INTO subject_teacher (`subject_id`, `teacher_id`, `group_id`) VALUES (NULL, 5, 12)";
/*
let sql = "UPDATE marks SET mark=5 WHERE mark < 5 AND subject_id = 12  "; //SET mark=5
connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("aprovado");
        console.log(result);
    }
});

*/
//cuantos elementos tiene una tabla
/*
let sql = "SELECT count(*) FROM groups";


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("aprovado");
        console.log(result);
    }
});
*/