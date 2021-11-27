const mongoose = require('mongoose')
const schemaMaterias = require('../models/materias')

exports.agregarTarea = async (req, res) => {
    //TODO: Decidir estructura de subida
}

exports.getTareas = async (req, res) => {
    try{
        const tareas = await schemaMaterias.find()
        res.json(tareas)
        console.log('Lista de Materias: \n' + tareas)
    } catch (err){
        console.log('Error de getTareas: ' + err)
    }
}

exports.actualizarTarea = async(req, res) => {
    //TODO: Ver estructura del JSON para realizar cambios en el esquema
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