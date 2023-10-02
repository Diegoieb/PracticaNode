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

app.put('/updateAviones',(req,res)=>{
    res.send('Actualizar aviones');
})

app.post('/agregaAviones',(req,res)=>{
    res.send('Agregar aviones');
})

app.delete('/borrarAviones',(req,res)=>{
    res.send('Borrando aviones');
})

app.get('/autos',(req,res)=>{
    res.send('<h1>Listar Autos</h1>')
})

app.put('/updateAutos',(req,res)=>{
    res.send('Actualizar autos');
})

app.post('/agregaAutos',(req,res)=>{
    res.send('Agregar autos');
})

app.delete('/borrarAutos',(req,res)=>{
    res.send('Borrando autos');
})

app.get('/motos',(req,res)=>{
    res.send('<h1>Listar Motos</h1>')
})

app.put('/updateMotos',(req,res)=>{
    res.send('Actualizar Motos');
})

app.post('/agregaMotos',(req,res)=>{
    res.send('Agregar Motos');
})

app.delete('/borrarMotos',(req,res)=>{
    res.send('Borrando Motos');
})

app.get('/trenes',(req,res)=>{
    res.send('<h1>Listar Trenes</h1>')
})

app.put('/updateTrenes',(req,res)=>{
    res.send('Actualizar Trenes');
})

app.post('/agregaTrenes',(req,res)=>{
    res.send('Agregar Trenes');
})

app.delete('/borrarTrenes',(req,res)=>{
    res.send('Borrando Trenes');
})

//configuro puerto por el cual escuchara las solicitudes
const port = 3000;
app.listen(port, ()=>{
    console.log('Servidor en puerto 3000');
})


//Para no levantar el servidor en cada cambio, se puede instalar nodemon
//Tambien sirve para proyectos con puertos diferentes
//Se ejecuta con npx nodemon nombre index o archivo raiz del proyecto e instalando nodemon con npm install -g nodemon


