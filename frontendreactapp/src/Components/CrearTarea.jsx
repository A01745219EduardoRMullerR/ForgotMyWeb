import React from "react";

const CrearTarea = ()=>{
    return(
        <div className='card'>
          <form className='card-body' onSubmit={(req, res)=> console.log(req.body)}>
            <input type='text' name='nombre' className='form-control row'/>
            <input type='date' name='fecha' className='form-control row'/>
            <input type='text' name='descrpcion' className='form-control row'/>
            <input type='number' name='valor' className='form-control row'/>
            <button type='submit' className='btn-success row'>Subir Tarea</button>
          </form>
        </div>
      )
}

export default CrearTarea
