const { Schema, model } = require("mongoose"); //base de datos , modelo para usarlo en la api rest



const peliculaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    nacionality: String,
    genre: String,
    actors: [{ type: String }],
    directors: [{ type: String }],
    writers: [{ type: String }],
    plataform: String,
    isMCU: String,
    mainCharacterName: String, //nombre del personaje principal
    producer: { type: String, default: "Hollywood" },
    distributor: String

});

module.exports = model("Pelicula", peliculaSchema); //module.exports me exporta todo lo que esta arriba