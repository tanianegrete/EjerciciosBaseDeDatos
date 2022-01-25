//haz que se muestre el mansaje cada 5 segundos
//guarda una variable el tiempo actual: Date.now() y cada vez
//que se muestre el mensaje muestra la diferencia entre la fecha actual y el tiempo que guardaste en la variable anterior

let tiempo1 = Date.now()
setInterval(function() { // setInterval: es un bucle  constantemente hara esa accion 
    let tiempo = Date.now();
    console.log(" *** 5 segundos.");
    resultado = tiempo - tiempo1;
    console.log(resultado);
    tiempo1 = Date.now();
}, 5000);

//¿sale siempre la misma diferencia de segundo? Respuesta:NO SALEN EXACTAMENTE LOS 5 SEGUNDOS Y APARECE DESFASADO  POR LA SATURACION DEL INTERVALO