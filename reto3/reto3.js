function greeting(name) {
    return name + "  saludo";
}

greeting("tania"); //LLAMANDO A LA FUNCION 

module.exports = {
    greeting
};

//usa la funcion greeting 
//const greeting1 = require('./reto3.2.js');
//console.log(greeting("Luna"));