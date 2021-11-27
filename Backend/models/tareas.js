import mongoose from "mongoose";

const schemaTarea = mongoose.Schema({
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

const tareas = mongoose.model('Tareas', schemaTarea)

module.exports = tareas