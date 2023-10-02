// Importar el modulo de express
//Lo guardo en una constante con el mismo nombre
const express = require('express');

//instanciar el modulo en una app
//Desde aqui sera llamado en futuros end point
const app = express();

//configuro la primera respuesta a una solicitud
//solicitudes:
app.get('/',(req, res)=>{
    res.send('<h1>NANA volando</h1>');
})

app.get('/login',(req,res)=>{
    res.send('<h1>Bienvenido al login</h1>');
})

app.get('/aviones',(req,res)=>{
    res.send('<h1>Listar Aviones</h1>')
})

app.get('/autos',(req,res)=>{
    res.send('<h1>Listar Autos</h1>')
})

app.get('/motos',(req,res)=>{
    res.send('<h1>Listar Motos</h1>')
})

app.get('/trenes',(req,res)=>{
    res.send('<h1>Listar Trenes</h1>')
})

app.put('/updateAviones',(req,res)=>{
    res.send('<h1>No hay dispo</h1>');
})

//configuro puerto por el cual escuchara las solicitudes
const port = 3000;
app.listen(port, ()=>{
    console.log('Servidor en puerto 3000');
})


//Para no levantar el servidor en cada cambio, se puede instalar nodemon
//Tambien sirve para proyectos con puertos diferentes
//Se ejecuta con npx nodemon nombre index o archivo raiz del proyecto e instalando nodemon con npm install -g nodemon


