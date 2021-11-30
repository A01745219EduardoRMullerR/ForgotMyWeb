import React from "react";

const CrearTarea = ()=>{
    return(
        <div className='card'>
          <form className='card-body' onSubmit={(e)=>e.preventDefault()}>
            <input type='text' name='nombre' className='form-control'/>
            <input type='date' name='fecha' className='form-control'/>
            <input type='text' name='descrpcion' className='form-control'/>
            <input type='number' name='valor' className='form-control'/>
            <button type='submit' className='btn-success'>Subir Tarea</button>
          </form>
        </div>
      )
}

export default CrearTarea
