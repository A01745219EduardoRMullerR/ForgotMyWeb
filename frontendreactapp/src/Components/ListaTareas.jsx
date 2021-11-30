import React, {useEffect} from 'react'
import axios from 'axios'


const ListaTareas = ()=>{

    const cargaTareas = async ()=>{
        const res = await axios.get('https://localhost:8081/Tareas/tarea')
        console.log(res)
    }

    useEffect(()=>{
        cargaTareas()

    }, [])

    return (
        <div>
        <h1>PRUEBA</h1>
        </div>
    )
}

export default ListaTareas

