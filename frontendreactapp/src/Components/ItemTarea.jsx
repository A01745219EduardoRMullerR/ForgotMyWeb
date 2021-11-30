import React from "react";
import * as services from './Servicios'

const ItemTarea = ({props, cargaTareas})=>{

  const handleDelete = async (id)=>{
    await services.eliminarTarea(id)
    cargaTareas()


  }

  return(
      <div className="col-md-4">
        <div className='card-body'>
          <div className='d-flex justify-content-between'>
          <h1>{props.nombre}</h1>
          <span className='text-danger' onClick={()=> handleDelete(props._id)}>
            X
          </span>
          </div>
          <p>{props.description}</p>
          <p>{props.valor}</p>
        </div>
      </div>
  )
}

export default ItemTarea