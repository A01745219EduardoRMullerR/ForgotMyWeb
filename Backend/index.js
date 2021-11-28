const express = require('express')
const path = require("path");
const app = express()
const routeMaterias = require('../Backend/routes/materias')
const routeTareas = require('../Backend/routes/tareas')
const mongoose = require("mongoose");

/*app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()

})*/
app.use(express.static(path.join(__dirname, 'Backend')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/Materias', routeMaterias)
app.use('/Tareas', routeTareas)

mongoose.connect('mongodb://user10:root@54.198.161.35:27017/base10?authSource=admin')
    .then(()=>{
        app.listen(8081,()=>console.log("Servidor Back-End en línea :D \n"))
    })
    .catch(err=>console.log(err))

/*app.listen(8080, ()=>{
    console.log('Backend en linea.... :D')
})*/