const { Professional, Movie, Imdb, enumeradoRoles } = require('../node.js semana1septiembre/reto3/imbd.js/index.js');


let professional1 = new Professional(" Quentin Tarantino.", 70, " Masculino.", 90, 178, " Castaño.", " Oscuro.", " Director.", true, " Ingleses. ", 8, enumeradoRoles.Director, "imgPelis/professional1.jpeg");
let actor1 = new Professional(" Sandra Bullon.", 45, " Femenino.", 60, 120, " Castaño.", " Oscuro", " Actriz.", true, " Americanos", 4, enumeradoRoles.Actor, "imgPelis/actor1.jpg");
let professional3 = new Professional(" Brandon Prot.", 51, " Masculino.", 80, 180, " Rubio. ", " Azules.", " Guionista ", true, " Franceses", 5, enumeradoRoles.Guionista, "imgPelis/professional3.jpg");
let actor2 = new Professional("Brad pitt.", 55, " Masculino.", 80, 180, " Castaño.", " Marron.", "Actor.", true, "Americano", 1, enumeradoRoles.Actor, "imgPelis/actor2.jpg");
let actor3 = new Professional(" Will Smith.", 51, " Masculino.", 90, 190, "Oscuro.", " Oscuro.", " Actor.", true, " EUA", 4, enumeradoRoles.Actor, "imgPelis/actor3.jpg");
let professional5 = new Professional(" Martin Scorsese.", 81, " Masculino.", 90, 186, " Blanco. ", " Azules.", " Director ", true, " Italiano", 5, enumeradoRoles.Director, "imgPelis/professional5.jpg");
let professional6 = new Professional(" Teresa Tera. ", 51, "Femenino.", 50, 150, " Rojiza. ", " Verdes.", " Guionista ", true, "Romana", 5, enumeradoRoles.Guionista, "imgPelis/professional6.jpeg");
let professional7 = new Professional(" Josf Sander.", 33, " Masculino.", 65, 166, " Negro. ", " Azules.", " Director. ", true, " Grecia", 5, enumeradoRoles.Director, "imgPelis/professional7.jpeg");
let professional8 = new Professional(" Thomas.", 40, "Masculino.", 50, 150, " Pelirojo .", " Verdes.", " Guionista. ", true, "Italiano", 5, enumeradoRoles.Guionista, "imgPelis/professional8.jpeg");
let actor4 = new Professional("Luisa Clark.", 55, " Femenino.", 52, 140, " Castaño.", " Marron.", "Actor", true, "Cuba", 0, enumeradoRoles.Actor, "imgPelis/actor4.jpg");
let actor5 = new Professional(" Laura Thom.", 51, " Femenino.", 60, 160, "Rubio.", " Oscuro.", " Actor.", true, " Velezuela", 1, enumeradoRoles.Actor, "imgPelis/actor5.jpg");



let movie1 = new Movie("El rey leon.", 1992, "Inglesa", "Infantil", "imgPelis/movie1.jpg");
movie1.lenguaje = "Español ";
movie1.plataform = "Netflix";
movie1.isMCU = true;
movie1.mainCharacterName = "Simba"
movie1.producer = "Paola Rojas"
movie1.distributor = "Francisco Lopez"
movie1.actors = [actor1, actor2];
movie1.director = professional1;
movie1.writer = professional3;


let movie2 = new Movie("El amor en tiempos del colera.", 1980, "EUA", "Drama", "imgPelis/movie2.jpeg");
movie2.lenguaje = "Español ";
movie2.plataform = "Youtube";
movie2.isMCU = true;
movie2.mainCharacterName = "Florentino y Fermina"
movie2.producer = "Mike Newell"
movie2.distributor = "Jose Tellez"
movie2.actors = [actor4, actor3];
movie2.director = professional5;
movie2.writer = professional6;


let movie3 = new Movie("Sing.", 2016, "EUA", "Animada", "imgPelis/movie3.jpg");
movie3.lenguaje = "Ingles";
movie3.plataform = "Netflix";
movie3.isMCU = true;
movie3.mainCharacterName = "Koala"
movie3.prducer = " Matten McFalle"
movie3.distributor = " Reese"
movie3.actors = [actor5, actor3];
movie3.director = professional7;
movie3.writer = professional8;

let array = [movie1, movie2]
let movies = new Imdb(array);


console.log(movies.peliculas[0].actors) //muestra los actores de la pelicula 1