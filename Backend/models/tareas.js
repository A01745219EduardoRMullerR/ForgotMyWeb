import mongoose from "mongoose";

const schemaTarea = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        Type: String,
        required: true
    },
    materia:[
        {
            nombre:{
                Type: String,
                required: true
            },
            clave:{
                Type: mongoose.Schema.Types.ObjectId,
                required: false
            },
            tareas: {
                Type: Schema.ObjectId,
                required: false
            }
        }
    ],
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