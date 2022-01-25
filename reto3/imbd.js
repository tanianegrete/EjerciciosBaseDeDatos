let enumeradoRoles = {
    Actor: 'Actor',
    Guionista: 'Guionista',
    Director: 'Director'
}

module.exports = class Professional {
    constructor(name, age, genre, weigtht, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, enumeradoRoles, fotoA) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weigtht = weigtht;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = enumeradoRoles;
        this.fotoA = fotoA;

    }

}


class Movie {
    constructor(title, releaseYear, nacionality, genre, fotoM) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre; //genero
        this.actors = [];
        this.fotoM = fotoM;

        this.director = null;
        this.writer = null;
        this.lenguaje = "";
        this.plataform = "";
        this.isMCU = "";
        this.mainCharacterName = ""; //nombre del personaje principal
        this.producer = "";
        this.distributor = "";


    }

    /*setDatos(movie, name, age, genre, weigtht, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, enumeradoRoles, fotoA) {

        $("#nameP" + movie).html(name);
        $("#ageP" + movie).html(age);
        $("#genreP" + movie).html(genre);
        $("#weigthtP" + movie).html(weigtht);
        $("#heightP" + movie).html(height);
        $("#hairColorP" + movie).html(hairColor);
        $("#eyeColorP" + movie).html(eyeColor);
        $("#raceP" + movie).html(race);
        $("#isRetiredP" + movie).html(isRetired);
        $("#nationalityP" + movie).html(nationality);
        $("#oscarsNumberP" + movie).html(oscarsNumber);
        $("#professionP" + movie).html(enumeradoRoles);
        $("#fotoAP" + movie).attr("src", fotoA);


    }  */

}

class Imdb {
    constructor(peliculas) {
        this.peliculas = peliculas;
    }
}

module.exports = {
    Professional,
    Movie,
    Imdb,
    enumeradoRoles
};