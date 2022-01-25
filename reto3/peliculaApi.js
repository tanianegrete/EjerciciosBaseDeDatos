module.exports = class Movie {
    constructor(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre; //genero
        //this.actors = [];
        // this.fotoM = fotoM;

        // this.director = null;
        this.writer = null;
        this.lenguaje = "";
        this.plataform = "";
        this.isMCU = "";
        this.mainCharacterName = ""; //nombre del personaje principal
        //this.producer = "";
        // this.distributor = "";


    }
}

/*"title":  "Laverinto del fauno",
"releaseYear": "2010",
"nacionality":  "españa",
"genre": "fantacia",
"writer":  "steven loro",
"lenguaje": "Español",
"plataform":  "You tube",
"mainCharacterName ": "Lara"


{
	"title":  "RAMPUZEL",
"releaseYear": "2010",
"nacionality":  "españa",
"genre": "fantacia",
"writer":  "steven loro",
"lenguaje": "Español",
"plataform":  "You tube",
"mainCharacterName ": "Lara"
	


}*/