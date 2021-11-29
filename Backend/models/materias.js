const mongoose = require('mongoose')

const schemaMaterias = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    clave:{
        type: String,
        required: false
    },
})


const materias = mongoose.model('Materias', schemaMaterias)

module.exports = materias

