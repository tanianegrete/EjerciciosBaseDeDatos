const express = require('express');
const app = express();

app.get('/', function(req, res) { //si esta en la pagina correcta mandar el mensaje
    res.send('Hola estas en el servidor'); //mensaje en la pantalla del usuario
});


app.listen(3002);