const mongoose = require('mongoose')

const schemaMaterias = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        Type: String,
        required: true
    },
    clave:{
        Type: String,
        required: false
    },
    tareas: {
        Type: Schema.ObjectId,
        required: false
    }
})


const materias = mongoose.model('Materias', schemaMaterias)


module.exports = materias
