import React, {useState} from "react";
import * as services from './Servicios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate, useParams} from 'react-router-dom'





const CrearTarea = ()=>{

  const history = useNavigate()
  const params = useParams()
  console.log(params)

  const [tarea, setTarea] = useState({
    nombre: '',
    description: '',
    entrega: '',
    valor: 0

  })

  const handleInputChange = (e)=>{
    setTarea({...tarea, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    await services.crearTarea(tarea)
    toast.success('Tarea Agregada')
    history('/')


  }
    return(
      <div className='mb-3'>
        <h1 className='mx-3 my-2'>Crear Tarea</h1>
        <div className='card'>
          <form className='card-body' onSubmit={handleSubmit}>
            <input type='text' onChange={handleInputChange} name='nombre' className='form-control row' placeholder='Nombre'/>
            <input type='date' onChange={handleInputChange} name='fecha' className='form-control row my-1'/>
            <textarea name='description' onChange={handleInputChange} className='form-control row my-1' rows='5' placeholder='Descripcion'> </textarea>
            <input type='number' onChange={handleInputChange} name='valor' className='form-control row my-1' placeholder='valor'/>
            <button type='submit' className='btn-success row'>Subir Tarea</button>
          </form>
        </div>
      </div>
      )
}

export default CrearTarea
