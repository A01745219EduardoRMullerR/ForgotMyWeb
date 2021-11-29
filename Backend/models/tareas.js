const mongoose = require('mongoose')
const schemaMaterias = require('./materias')

const schemaTarea = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    materia: {
        type: [schemaMaterias],
        ref: 'Materias',
        required: false
    },
    entrega:{
        type: Date,
        required: false
    },
    valor:{
        type: Number,
        required: false
    }

})

const tareas = mongoose.model('Tareas', schemaTarea)

module.exports = tareas