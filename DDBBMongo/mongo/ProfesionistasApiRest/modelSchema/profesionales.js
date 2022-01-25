const { Schema, model } = require("mongoose"); //base de datos , modelo para usarlo en la api rest


const profesionalSchema = new Schema({


    name: String,
    age: Number,
    genre: String,
    weigtht: String,
    height: String,
    hairColor: String,
    eyeColor: String,
    race: String,
    isRetired: Boolean,
    nationality: String,
    oscarsNumber: String,
    profession: String


});




module.exports = model("Profesionale", profesionalSchema); //module.exports me exporta todo lo que esta arriba