// mensajes en pantalla dependiendo de la instruccion 


setTimeout(function() { //segundo
    console.log("1: after 1 second");
    //console.log("3:last process after finish the loop")


    setImmediate(function() {
        console.log("2: last process after finish the loop")

        process.nextTick(function() {
            console.log("3: initial loop event")
        });

    });


}, 1);



//setImmediate(function() { //tercero
//    console.log("3:last process after finish the loop")
//});

//process.nextTick(function() { //primero
//   console.log("1: initial loop event")
//});