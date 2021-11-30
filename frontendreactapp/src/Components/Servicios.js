import axios from 'axios'

export const getTareas = async () =>{
  return await axios.get('http://localhost:8081/Tareas/tarea')
}

export const crearTarea = async (req) =>{
  return await axios.post('http://localhost:8081/Tareas/agregarTarea', req)
}

export const eliminarTarea = async (id)=>{
  return await axios.post('http://localhost:8081/Tareas/eliminarTarea', id)
}