const http = require("http");

const server = http.createServer(function(request, response) {
    console.log("Peticion recibida del cliente");
    console.log("url" + request.url);

    console.log(request.headers["content-length"]);
    console.log(request.headers["content-type"]);
    console.log(request.headers["user-agent"]); //datos de la maquina que esta  los esta dando Motzilla
    console.log("método de solicitud: " + request.method); /*** */
    console.log("solicitar código de estado " + response.statusCode); /**** */
    // response.writeHead(200, { "Content-Type": "application/json" }); //response write head:respuesta escribir cabeza,,,,200=OK ,,content type json
    //response.write("ok: true, message:'Recibido'!"); // desde el servido
    //response.write(JSON.stringify({ ok: true, message: "Recibido" })); // desde el servido

    if (request.url === "/bye") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify({ ok: true, message: "Adios" }));
        response.end()

    } else if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify({ ok: true, message: "Recibido" }));
        response.end()
    }

});

server.listen(3001);