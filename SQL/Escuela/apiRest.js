const express = require('express'); //express es el que hace accion de levantar el servicio rest paginas http//
const bodyParser = require('body-parser');
var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
const find = require('./operacionesMetodos'); // se enlaza en las operaciones metodos para ejecutar 



let mysql = require("mysql");
const { send } = require('process');
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



//optiene los datos de un alumno por el id

app.get("/alumnos/:id",
    function(request, response) {
        let idAlumnos = request.params.id;
        let array = new Array(idAlumnos);

        let sql = "SELECT * FROM students WHERE students_id =?";
        console.log(sql + idAlumnos);
        connection.query(sql, array, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);


//Obten todos los datos de los alumnos 
app.get("/alumnos",
    function(request, response) {

        let sql = "SELECT * FROM students";

        connection.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);



//añade nuevo alumno 
app.post("/alumnos",
    function(request, response) {

        let nombre = request.body.first_name;
        let apellido = request.body.last_name;
        let grupo = request.body.group_id;
        let fecha = request.body.fecha_ingreso;
        let params = [nombre, apellido, grupo, fecha];

        let sql = "INSERT INTO  students ( first_name, last_name, group_id,fecha_ingreso ) VALUES ( ?,?,?,?)";

        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);


/*
pruebas de potsman
     
        "first_name": "jijijiji",
        "last_name": "Torres",
        "group_id":10,
       "fecha_ingreso":"2010-10-01"
 */



//UPDATE students SET first_name="nombre cambio",last_name="apellido cambio",group_id="1",fecha_ingreso="2020-10-01" WHERE students_id=4
//modifica los datos de un alumno
app.put("/alumnos",
    function(request, response) {

        let params = [request.body.first_name, request.body.last_name, request.body.group_id, request.body.fecha_ingreso, request.body.id]
        console.log(params)
        let sql = "UPDATE students SET  first_name = ?, last_name=?, group_id=? ,fecha_ingreso=? WHERE students_id = ?"
        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                response.send(result)
            }
        });
    });

/*
  
       "id":8,
       "first_name": "Paca",
        "last_name": "Carmona",
        "group_id":1,
       "fecha_ingreso":"2010-10-01"
           
       
       
        */



//DELETE FROM students WHERE students_id=4
//elimina un alumno

app.delete("/alumnos",
    function(request, response) {

        let id = request.body.students_id;
        let params = [id]

        let sql = 'DELETE FROM students WHERE students_id=?';


        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);

//potsman
/*

 "students_id":6

*/



//2 EndPoints De Profesores
//obten los datos de  un profesor pasado por parametros:
//SELECT * FROM teachers WHERE teacher_id = 2
app.get("/profesores/:id",
    function(request, response) {
        let idProfesores = request.params.id;
        let array = [idProfesores];

        let sql = "SELECT * FROM teachers WHERE teacher_id=?";

        connection.query(sql, array, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);
/*
potsman:
localhost:3068/profesores/2
*/


//obten toda la lista de profesores:

app.get("/profesores",
    function(request, response) {

        let sql = "(SELECT * FROM teachers)";

        connection.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);

/*
potsman:
localhost:3068/profesore
*/

//Añade un nuevo profesor
//INSERT INTO teachers ( first_name, last_name) VALUES ("nuevoProfe","apellidonuevoProfe")
app.post("/profesores",
    function(request, response) {

        let nombre = request.body.first_name;
        let apellido = request.body.last_name;
        let params = [nombre, apellido];

        let sql = "INSERT INTO  teachers ( first_name, last_name) VALUES (?,?)";

        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);

/*
potsman:
  "first_name": "profe nuevo",
       "last_name": "profe nuevo"
       */

//Modifica datos de un profesor:

app.put("/profesores", function(request, response) {

    let params = [request.body.first_name, request.body.last_name, request.body.id]
    console.log(params)
    let sql = "UPDATE teachers SET  first_name = ?, last_name=? WHERE teacher_id = ?"
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result)
        }
    });
});

/*
potsman

   "id":2,
       "first_name": "MODIFICA DATOS",
        "last_name": "MODIFICA DATOS"
     
*/

//elimina un profesor:

//elimina un alumno

app.delete("/profesores",
    function(request, response) {

        let id = request.body.teacher_id;
        let params = [id];

        let sql = 'DELETE FROM teachers WHERE teacher_id=?';


        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);
/*
potsman:
   "teacher_id":2
   */

/*********************/
//3 EndPoints De grupos
//obten los datos de  un profesor pasado por parametros:
//SELECT * FROM teachers WHERE teacher_id = 2

app.get("/grupos/:id",
    function(request, response) {
        let idgrupos = request.params.id;
        let array = [idgrupos];

        let sql = "SELECT * FROM groups WHERE group_id=?";

        connection.query(sql, array, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);
/*
potsman:
localhost:3068/grupos/1
*/


//obten toda la lista de grupos

app.get("/grupos",
    function(request, response) {

        let sql = "(SELECT * FROM groups)";

        connection.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);

/*
potsman:
localhost:3068/grupos
*/

//Añade un nuevo grupo

app.post("/grupos",
    function(request, response) {

        let nombre = request.body.name;
        let params = [nombre];

        let sql = "INSERT INTO  groups (name) VALUES (?)";

        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);

/*
potsman:
   "name": "GrupoNuevo nuevo"
  
   */

//Modifica datos de un grupo group_id

app.put("/grupos", function(request, response) {

    let params = [request.body.name, request.body.id]
    console.log(params)
    let sql = "UPDATE groups SET  name = ? WHERE group_id = ?"
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result)
        }
    });
});

/*
potsman

"id":3,
   "name": "MODIFICA DATOS"
    
 
*/



//elimina un grupo "UPDATE groups SET  name = ? WHERE group_id = ?"


app.delete("/grupos",
    function(request, response) {

        let id = request.body.group_id;
        let params = [id];

        let sql = 'DELETE FROM groups WHERE group_id=?';


        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);
/*
potsman:
"group_id":1
*/

//*****************************4 Asignaturas */

//obten los datos de una asignatura pasado por parametros:

app.get("/asiganaturas/:id",
    function(request, response) {
        let id = request.params.id;
        let array = [id];

        let sql = "SELECT * FROM subjects WHERE subject_id=?";

        connection.query(sql, array, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);
/*
potsman:
localhost:3068/asiganaturas/12
*/


//obten toda la lista de asiganaturas:

app.get("/asiganaturas",
    function(request, response) {

        let sql = "(SELECT * FROM subjects)";

        connection.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);

/*
potsman:
localhost:3068/asiganaturas
*/

//Añade una nueva asignatura FROM subjects WHERE subject_id=?"

app.post("/asiganaturas",
    function(request, response) {
        let nombre = request.body.title;

        let params = [nombre];

        let sql = "INSERT INTO  subjects (title) VALUES (?)";

        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);

/*
potsman:
   "title": "nueva materia"
       */

//Modifica datos de una materia:

app.put("/asiganaturas", function(request, response) {

    let params = [request.body.title, request.body.id]
    console.log(params)
    let sql = "UPDATE subjects SET  title = ? WHERE subject_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result)
        }
    });
});

/*
potsman
           "id":15,
           "title": "modifica materia"
     
*/


//elimina un alumno

app.delete("/asiganaturas",
    function(request, response) {

        let id = request.body.subject_id;
        let params = [id];

        let sql = 'DELETE FROM subjects WHERE subject_id=?';


        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);
/*
potsman:
   "subject_id":12
   */

///////////////////////**********************5 Notas*/

//optien las notas por el id
//SELECT (mark) FROM marks WHERE mark_id=6
app.get("/notas/:id",
    function(request, response) {
        let idnotas = request.params.id;
        let array = new Array(idnotas);
        let sql = "SELECT * FROM marks WHERE mark_id =?";

        connection.query(sql, array, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);
/*
localhost:3068/notas/6

*/

//SELECT (mark) FROM marks WHERE mark_id=6
//Obten todos los datos de las notas  
app.get("/notas",
    function(request, response) {

        let sql = "SELECT * FROM marks";

        connection.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);
/*
localhost:3068/notas
*/

//SELECT (mark) FROM marks WHERE mark_id=6
//INSERT INTO marks( students_id, subject_id, date, mark) VALUES ("17","15","2020-05-01","8")
//añade nueva nota 
app.post("/notas",
    function(request, response) {
        let estudiante = request.body.students_id;
        let materia = request.body.subject_id;
        let fecha = request.body.date;
        let calificacion = request.body.mark;

        let params = [estudiante, materia, fecha, calificacion];

        let sql = "INSERT INTO  marks (students_id,subject_id,date, mark) VALUES (?,?,?,?)";

        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);


/*
pruebas de potsman
     
       "students_id":"17",
     	"subject_id":"15",
        "date":	"2010-04-05",
        "mark": "8"
   
 */




//modifica los datos de una nota
app.put("/notas", function(request, response) {

    let params = [request.body.students_id, request.body.subject_id, request.body.date, request.body.mark, request.body.id]

    let sql = "UPDATE marks SET  students_id =?, subject_id=?, date=? ,mark=? WHERE mark_id = ?"
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result)
        }
    });
});

/*
    	"id":6,
	    "students_id":"17",
     	"subject_id":"15",
        "date":	"2010-04-05",
        "mark": "88"
   
           
       
       
        */



//DELETE FROM marks WHERE mark_id
//elimina una nota

app.delete("/notas",
    function(request, response) {

        let id = request.body.mark_id;
        let params = [id]

        let sql = 'DELETE FROM marks WHERE mark_id=?';


        connection.query(sql, params, function(err, result) {
            if (err) {
                console.log(err);
            } else {

                console.log(result);
                response.send(result)
            }
        });


    }
);

//potsman
/*

 "mark_id":7

*/
// //////******** ENDPOINTS ADICIONALES ******************************** //


// NOTA MEDIA DEL ALUMNO POR SU ID
app.get("/media/:id", (req, res) => {
    let params = [req.params.id, req.body.mark_id];
    let sql = "SELECT students_id, AVG(mark) FROM marks WHERE students_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Nota media de estudiante por id calculado!");
            res.send(result);
            console.log(result);
        }
    });
});


// LISTA DE ASIGNATURAS A LAS QUE ESTA APUNTADAS EL ALUMNO DEL ID PASADO POR PARAMETRO
app.get("/apuntadas/:id", (req, res) => {
    let params = [req.params.id, req.body.mark_id];
    let sql = "SELECT * FROM `marks` WHERE students_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Lista de asignaturas del estudiante!");
            res.send(result);
            console.log(result);
        }
    });
});
// LISTA DE TODAS LAS ASIGNATURAS POR ALUMNO 
app.get("/apuntadas", (req, res) => {
    // let params = [req.params.id, req.body.mark_id];
    let sql = `SELECT first_name, last_name, title FROM students 
                    JOIN marks ON (students.students_id = marks.students_id) 
                        JOIN subjects ON ( marks.subject_id = subjects.subject_id )`;
    connection.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Lista de asignaturas por estudiante!");
            res.send(result);
            console.log(result);
        }
    });
});
// LISTA DE ASIGNATURAS QUE IMPARTE EL CADA PROFESOR POR  ID PASADO POR PARAMETRO
app.get("/impartidas/:id", (req, res) => {
    let params = [req.params.id, req.body.subject_id];
    let sql = `SELECT teachers.first_name, teachers.last_name, subjects.title FROM subjects 
                  JOIN subject_teacher ON(subjects.subject_id = subject_teacher.subject_id) 
                      JOIN teachers ON(subject_teacher.teacher_id = teachers.teacher_id) 
                        WHERE subject_teacher.teacher_id = ?`;
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Lista de asignaturas del estudiante!");
            res.send(result);
            console.log(result);
        }
    });
});

// LISTA DE TODAS LAS ASIGNATURAS POR ALUMNO 
app.get("/impartidas", (req, res) => {
    let sql = `SELECT teachers.first_name, teachers.last_name, subjects.title FROM subjects 
                  JOIN subject_teacher ON (subjects.subject_id = subject_teacher.subject_id) 
                      JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id)`;
    connection.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Lista de asignaturas impartidas por cada profesor!");
            res.send(result);
            console.log(result);
        }
    });
});























app.use(
    (req, res, next) => {
        let respuesta = { error: true, codigo: 404, mensaje: "‘Url no encontrada’ " };
        res.status(404).send(respuesta);
        //next();
    }
);
app.listen(3000, function() {
    console.log("‘Server is running..’");
});





app.listen(3068);