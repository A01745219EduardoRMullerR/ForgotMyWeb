import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Route, Routes, Switch} from 'react-router-dom';
import ListaTareas from './Components/ListaTareas.jsx'
import ListaMaterias from './Components/ListaMaterias'
import axios from 'axios'
import CrearTarea from "./Components/CrearTarea"
import 'bootswatch/dist/quartz/bootstrap.min.css'
import {ToastContainer} from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <header>
          <div className="col-md-12" style={{backgroundColor:"0x000000"}}>

          </div>
          <nav className="nav" style={{backgroundColor: '#7030e6'}}>
            <span className="nav-link"><Link to="/">Tareas</Link></span>
            <span className="nav-link"><Link to="/CrearTarea">Crear Tarea</Link></span>
            <span className="nav-link"><Link to="/Materias">Materias</Link></span>
          </nav>


        </header>
      </div>

      <Routes>
        
        <Route path='/' element={<ListaTareas/>}/>
        <Route path='/Materias' element={<ListaMaterias/>}/>
        <Route path='/CrearTarea' element={<CrearTarea/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    {/*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();