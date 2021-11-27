const mongoose = require('mongoose')
const schemaMaterias = require('../models/materias')

exports.agregarMateria = async (req, res) => {

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

}

exports.borrarMateria = async (req, res) => {

}