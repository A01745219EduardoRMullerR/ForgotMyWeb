import React, {useEffect} from 'react'
import axios from 'axios'


const ListaTareas = ()=>{

    const cargaTareas = async ()=>{
        await axios.get('https://localhost8081/tarea')
    }

    useEffect(()=>{
        console.log('object')

    }, [])

    return (
        <div>
        <h1>PRUEBA</h1>
        </div>
    )
}

export default ListaTareas

