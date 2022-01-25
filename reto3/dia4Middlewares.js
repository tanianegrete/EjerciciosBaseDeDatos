const express = require('express');
const app = express();

app.use((req, res, next) => { //metodo generico
    console.log('hola desde el middleware global'); //cada que el usuario use la pagina se notara en consola el mensaje
    next();
});

app.use('/ruta', (req, res, next) => { //busca la ruta de: /ruta
    console.log('hola desde el middleware global de /ruta'); //si usan la ruta se pondra en consola el mensaje
    next();
});

app.get('/ruta/a',
    function(req, res, next) {
        console.log('hola desde el middleware global de /ruta/a');
        next();
    },
    function(req, res) {
        res.send('Hola desde la ruta /ruta/a')

    })
app.listen(3003);