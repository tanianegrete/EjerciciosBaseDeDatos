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

//Nota media de alumnos.
/*

let sql = "SELECT AVG(mark)FROM marks"; 

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("la nota media de los alumnos es:");
        console.log(result);
    }
});
*/

/*
//Calcular el numero total de alumnos


let sql = "SELECT  COUNT(*) FROM students";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("El total de alumnos es:");
        console.log(result);
    }
});
*/
/*
//Listar (MOSTRAR) todos los campos de la tabla "groups"


let sql = "SELECT * FROM groups";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("El contenido de groups es:");
        console.log(result);
    }
});
*/


/*

//Elimina todas las notas de la base de datos que estan por encima de 5 y que sean del año pasado no BETWEEN*****************


let sql = "DELETE  mark FROM marks WHERE date>'20118-01-01' AND mark<5";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Fechas eliminadas");
        console.log(result);
    }
});

*/
/*
//crear un campo de año :"UPDATE students SET fecha_ingreso='2019-08-12' WHERE first_name='Desy'";
//Obtener los datos de todos los estudiantes que esten en el actual año 
//la tabla de estudiantes debe de tener un campo que sea del año de ingreso

let sql = "SELECT * FROM students WHERE  fecha_ingreso >'2019-12-31'"; //  "DELETE mark FROM marks WHERE date < 2010-01-01";

connection.query(sql, function(err, result) {
    if (err) {

        console.log(err);
    } else {
        console.log("Los alumnos del actual año son :");
        console.log(result);
    }
});

*/

/*
//CALCULAR EL NUMERO DE PROFESORES QUE HAY POR CADA ASIGNATURA

let sql = "SELECT subject_id , COUNT (*) AS profesores FROM  subject_teacher GROUP BY teacher_id ;" //se cambia el valor de subject_id por el id de la materia

connection.query(sql, function(err, result) {
    if (err) {

        console.log(err);
    } else {
        console.log(" asignatura :");
        console.log(result);
    }
});

*/

//OBTEN EL id Y LA NOTA DE LOS ALUMNOS QUE  TENGAN UN ID ENTRE 1 Y 20 
//O QUE TENGA UNA NOTA MAYOR DE 8 
//Y LA NOTA TENGA FECHA DEL AÑO PASADO 
/*
//let sql = "SELECT mark_id , mark  FROM  marks WHERE mark_id<20 OR mark > 8  ;"
///***SELECT AVG(mark), subject_id FROM marks WHERE date<'2022-01-01' GROUP BY markS.subject_id */
let sql = "SELECT mark, students_id FROM marks WHERE students_id BETWEEN 1 AND 20 OR mark >8 AND date < '2020-01-01' || date >2019-01-01";

connection.query(sql, function(err, result) {
    if (err) {

        console.log(err);
    } else {
        console.log(" asignatura :");
        console.log(result);
    }
});


/*
//Obter la media de las notas que se han dado el ultimo año  por asignatura.


let sql = "SELECT AVG(mark) FROM marks WHERE date<'2022-01-01'  gruop";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("la nota media de los alumnos es:");
        console.log(result);

    }
});
*/
//Obten la media aritmetica las notas que se han dado por alumno el ultimo año
//SELECT students_id, AVG(mark) FROM marks GROUP BY marks.students_id
let sql = "SELECT AVG (mark)  FROM marks WHERE  date<'2020-01-01'  ";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("la nota media por alumnos es:");
        console.log(result);

    }
});
























/**************************** EJEMPLOS:
 

let sql = "SELECT SUM (mark)  FROM  marks;" //suma 

connection.query(sql, function(err, result) {
    if (err) {

        console.log(err);
    } else {
        console.log(" LA SUMA :");
        console.log(result);
    }
});
*/
/*

let sql = "UPDATE marks SET marks = 5 WHERE subject_id = 1 AND  mark >=4;" //ACTUALIZACION  valores

connection.query(sql, function(err, result) {
    if (err) {

        console.log(err);
    } else {
        console.log("  :");
        console.log(result);
    }
});
*/

/*
let sql = "SELECT mark FROM marks WHERE subject_id = 1 AND date BETWEEN '2018-09-01' AND  '2018-09-30';"; //SELECCIONA 

connection.query(sql, function(err, result) {
    if (err) {

        console.log(err);
    } else {
        console.log(" asignatura :");
        console.log(result);
    }
});
*/
/*
///GRUP BY
let sql = "SELECT subject_id , COUNT (*) AS NUMEROMARCAS FROM  marks GROUP BY subject_id HAVING num_marks>2 ;"; //se cambia el valor de subject_id por el id de la materia

connection.query(sql, function(err, result) {
    if (err) {

        console.log(err);
    } else {
        console.log(" asignatura :");
        console.log(result);
    }
});
*/
/*
let sql = "SELECT subject_id , COUNT (*) AS NUMEROMARCAS FROM  marks GROUP BY subject_id ;"; //se cambia el valor de subject_id por el id de la materia

connection.query(sql, function(err, result) {
    if (err) {

        console.log(err);
    } else {
        console.log(" asignatura :");
        console.log(result);
    }
});
*/