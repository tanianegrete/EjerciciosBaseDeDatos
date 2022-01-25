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

//OBTIENE LOS NOMBRE Y APELLIDOS JUNTO CON LA CALIFICACION
/*
let sql = " SELECT first_name, last_name , mark FROM students JOIN marks ON (students.students_id = marks.students_id) WHERE date >='2020-01-01'";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});


*/


//Obtener los nombres  y apellidos de los alumnos 
//Y los nombres de las asignaturas en las que estan apuntados

///let sql = " SELECT first_name, last_name , title FROM students JOIN subjects ON (students.students_id = subjects.students_id) WHERE date >='2020-01-01'";
//let sql = " SELECT first_name, last_name , mark FROM students JOIN marks ON (students.students_id = marks.students_id) WHERE date >='2020-01-01'";
/*
let sql = "SELECT first_name, last_name , title FROM students JOIN marks ON (students.students_id = marks.students_id) JOIN subjects ON (subjects.subject_id = marks.subject_id) WHERE date >='2020-01-01'";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});
*/
//OBTENER NOMBRE Y APELLIDOS DE PROFESORES  
//Y LOS NOMBRES DE LAS ASIGNATURAS QUE IMPARTEN 
//SELECT teachers.first_name, teachers.last_name, subjects.title FROM subject_teacher JOIN teachers ON(subject_teacher.teacher_id = teachers.teacher_id) JOIN subjects ON(subject_teacher.subject_id = subjects.subject_id)
/*let sql = " SELECT teachers.first_name, teachers.last_name , subjects.title FROM subject_teacher JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) JOIN subjects ON(subject_teacher.subject_id = subjects.subject_id) ";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});


*/
/*

//OBTEN EL NUMERO TOTAL DE LOS ALUMNOS POR ASIGNATURA,
//EL NOMBRE DE ASIGNATURA
//NOMBRE Y APELLIDO DEL PROFESOR QUE LA IMPARTE//SELECT COUNT(students_id), subjects.title ,teachers.first_name, teachers.last_name FROM marks JOIN subjects ON (subjects.subject_id = marks.subject_id) JOIN subject_teacher ON (subject_teacher.subject_id= subjects.subject_id) JOIN teachers ON(teachers.teacher_id=subject_teacher.teacher_id) GROUP BY title


let sql = " SELECT COUNT(students_id), title ,teachers.first_name, teachers.last_name FROM marks JOIN subjects ON (subjects.subject_id = marks.subject_id) JOIN subject_teacher ON (subject_teacher.subject_id= subject.subject_id) JOIN teachers ON(teachers.teacher_id=subject_teacher.teacher_id) GROUP BY title ";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});
*/


//obtener  el nombre y apellido de todos los profesores
//****SELECT teachers.first_name,teachers.last_name FROM subject_teacher JOIN teachers ON (teachers.teacher_id= subject_teacher.teacher_id) 
//Las asiganturas que imparten
//JOIN subjects ON (subjects.subject_id=subject_teacher.subject_id) 
//y la nota media  de la asignatura  que imparten 
////SELECT teachers.first_name,teachers.last_name,subjects.title AS asignatura, AVG(marks.mark) FROM marks JOIN subjects ON (marks.subject_id = subjects.subject_id) JOIN subject_teacher ON (marks.subject_id =subject_teacher.subject_id) LEFT JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id)GROUP BY asignatura
//"SELECT teachers.first_name,teachers.last_name,subjects.title FROM subject_teacher JOIN teachers ON (teachers.teacher_id= subject_teacher.teacher_id) JOIN subjects ON (subjects.subject_id=subject_teacher.subject_id) ";
//"SELECT teachers.first_name,teachers.last_name,subjects.title AS asignatura, AVG(marks.mark) FROM marks JOIN subjects ON (marks.subject_id = subjects.subject_id) JOIN subject_teacher ON (marks.subject_id =subject_teacher.subject_id) LEFT JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id)GROUP BY asignatura
/*

let sql = "SELECT teachers.first_name,teachers.last_name,subjects.title AS asignatura, AVG(marks.mark) FROM marks JOIN subjects ON (marks.subject_id = subjects.subject_id) JOIN subject_teacher ON (marks.subject_id =subject_teacher.subject_id) LEFT JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id)GROUP BY asignatura


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});
*/

//listar  el nombre y los apellidos del alumnos :SELECT students.first_name, students.last_name FROM marks JOIN students ON(marks.students_id =marks.students_id)
// nombre de asignaturas:SELECT students.first_name, students.last_name ,subjects.title FROM marks JOIN students ON(marks.students_id =marks.students_id) JOIN subjects ON (marks.subject_id = marks.subject_id)
//el numero de asignaturas que ha cursado 
//nota media de ellasd 
//la nota mas alta y la nota mas baja conseguida
/*
SELECT students.first_name, students.last_name, COUNT(marks.mark) AS notaMedia, AVG(marks.mark) FROM marks
JOIN students ON(marks.students_id = subjects.students_id)
GROUP BY notaMedia
*/
//SELECT students.first_name, students.last_name, COUNT(marks.mark) , AVG(marks.mark) FROM marks JOIN students ON(marks.students_id =marks.students_id)
//**SELECT students.first_name, students.last_name ,subjects.title AS asignatura, AVG(marks.mark) FROM marks JOIN students ON(students.students_id =marks.students_id) JOIN subjects ON (subjects.subject_id = marks.subject_id) GROUP BY asignatura
//COUNT(subjects.name)

//SELECT students.first_name, students.last_name ,COUNT(subjects.subject_id) AS Nºasignatura, AVG(marks.mark), MAX(mark)NotaMaxima, MIN(mark)NotaMinima FROM marks JOIN students ON(students.students_id =marks.students_id) JOIN subjects ON (subjects.subject_id = marks.subject_id)
//SELECT students.first_name, students.last_name ,COUNT(subjects.subject_id) AS Nºasignatura, AVG(marks.mark), MAX(mark)NotaMaxima, MIN(mark)NotaMinima FROM marks JOIN students ON(students.students_id =marks.students_id) JOIN subjects ON (subjects.subject_id = marks.subject_id)

let sql = "SELECT students.first_name, students.last_name ,COUNT(subjects.subject_id) AS Nºasignatura, AVG(marks.mark), MAX(mark)NotaMaxima, MIN(mark)NotaMinima FROM marks JOIN students ON(students.students_id =marks.students_id) JOIN subjects ON (subjects.subject_id = marks.subject_id)";


connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("");
        console.log(result);
    }
});