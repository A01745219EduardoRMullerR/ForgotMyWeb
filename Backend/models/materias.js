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

const schemaTarea = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
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

const materias = mongoose.model('Materias', schemaMaterias)
const tareas = mongoose.model('Tareas', schemaTarea)

module.exports = materias
module.exports = tareas