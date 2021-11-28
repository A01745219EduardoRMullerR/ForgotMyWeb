const mongoose = require('mongoose')
const schemaTarea = require('../models/materias')


/* SCHEMA---------------------------------------------------------------------------------------------
* const schemaTarea = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        Type: String,
        required: true
    },
    materia:{
        Type: String,
        required: true
    },
    description: {
        Type: String,
        required: false
    },
    entrega:{
        Type: Date,
        required: false
    },
    valor:{
        Type: Number,
        required: false
    }

})
*-----------------------------------------------------------------------------------------------------------
*/


exports.agregarTarea = async (req, res) => {
    const tareaNueva = new schemaTarea(req.body)
    tareaNueva.id =new mongoose.Types.ObjectId()
    try{
        tareaNueva.save()
        console.log('subida exitosa')
        res.json({Status: 200})
    } catch (err){
        console.log("Error al guardar tarea (Error: " + err + ")")
        res.json({Status: 500})
    }
}

exports.getTareas = async (req, res) => {
    try{
        const tareas = await schemaMaterias.find()
        res.json(tareas)
        console.log('Lista de Materias: \n' + tareas)
    } catch (err){
        console.log('Error de getTareas: ' + err)
        res.json({Status: 400})
    }
}

exports.actualizarTarea = async(req, res) => {
    try{
        schemaTarea.findOneAndUpdate(req.body.filtro, req.body.cambio)
        console.log('Cambio realizado con exito')
        res.json({Status: 200})
    } catch (err){
        console.log("Error de operacion update (Error " + err + ')')
        res.json({Status: 400})
    }
}

exports.borrarTarea = async (req, res) => {
    try{
        await schemaMaterias.findOneAndDelete(req.body)
        res.json({Status: 200})
        console.log('Elemento borrado con exito')
    } catch(err){
        console.log('Error en borrado de elemento (' + err +')')
        res.json({Status: 500})
    }
}