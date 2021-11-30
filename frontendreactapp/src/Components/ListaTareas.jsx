import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as services from './Servicios'
import ItemTarea from './ItemTarea'


const ListaTareas = ()=>{

    const [tareas, setTareas] = useState([])

    const cargaTareas = async ()=>{
        const res = await services.getTareas()
        console.log(res.data)

        setTareas(res.data)
        console.log(tareas)
    }

    useEffect(()=>{
        cargaTareas()
    }, [])

    return (
        <div>
            <h1 className='text-center'>Tareas:</h1>
            <div className='row'>
                {tareas.map(tarea =>{
                return <ItemTarea props={tarea} cargaTareas={cargaTareas}/>
                })}
            </div>

        </div>
    )
}

export default ListaTareas

