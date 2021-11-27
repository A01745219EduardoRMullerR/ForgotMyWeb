const mongoose = require('mongoose')
const schemaMaterias = require('../models/materias')

exports.agregarMateria = async (req, res) => {
    //TODO: Decidir estructura de subida

}

exports.getMaterias = async (req, res) => {
    try{
        const materias = await schemaMaterias.find()
        res.json(materias)
        console.log('Lista de Materias: \n' + materias)
    } catch (err){
        console.log('Error de getMaterias: ' + err)
    }
}

exports.actualizarMaterias = async(req, res) => {
    //TODO: Ver estructura del JSON para realizar cambios en el esquema
}

exports.borrarMateria = async (req, res) => {
    try{
        await schemaMaterias.findOneAndDelete(req.body)
        res.json({Status: 200})
        console.log('Elemento borrado con exito')
    } catch(err){
        console.log('Error en borrado de elemento (' + err +')')
        res.json({Status: 500})
    }
}