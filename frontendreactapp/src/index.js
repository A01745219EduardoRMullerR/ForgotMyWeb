import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import ListaTareas from './Components/ListaTareas.jsx'
import ListaMaterias from './Components/ListaMaterias'
import CrearTarea from "./Components/CrearTarea"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <header>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                crossOrigin="anonymous"/>
        </header>
      </div>

      <Routes>
        
        <Route path='/' element={<ListaTareas/>}/>
        <Route path='/Materias' element={<ListaMaterias/>}/>
        <Route path='/CrearTarea' element={<CrearTarea/>}/>
      </Routes>
    </BrowserRouter>
    {/*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();