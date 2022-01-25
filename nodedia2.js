//reto1

setTimeout(function() {
    console.log("after 1 second")​

    ​
    setImmediate(function() {​
        console.log("last process after finish the loop")​
        process.nextTick(function() {​
            console.log("initial loop event")

        })​
    })​
}, 1000)



​
// var timeActualizado = Date.now();
​
setInterval(function() {

    var timeNow2 = Date.now()​

    ​
    console.log("hola que tal ! ")​
    var diferencia = (timeNow2 - timeNow)​
    console.log(diferencia)

    timeNow = Date.now();​​
}, 5000)



const saludo = require("./reto32.js");​
console.log(saludo.greeting("Javi"))