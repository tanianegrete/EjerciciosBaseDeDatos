const http = require("http");

const server = http.createServer(function(request, response) {
    console.log("Solicitud recibida del cliente");
    console.log("solicitud de encabezado" + request.headers.host); //request.headers.host :solicitud de anfitrion de encabezados
    console.log("método de solicitud" + request.method);
    console.log("solicitar código de estado" + response.statusCode);
    console.log("solicitar url" + request.url);
    response.writeHead(200, { "Content-Type": "text/plain" }); //response write head:respuesta escribir cabeza,,,,200=OK ,,content type text plain:tipo de contenido texto sin formato
    response.write("hello from server!!!"); // hola desde el servidor
    response.end();
});

server.listen(3000); //server.listen=servidor.Escuchar ,,, (2500)= numero de puerto desde crom en barra buscador escribir  localhost: con el numero de puerto