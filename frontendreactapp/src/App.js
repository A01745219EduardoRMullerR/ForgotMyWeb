import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import {Routes,Route,Link,Outlet} from 'react-router-dom';

function Header(){
  return(
    <header>
      <nav className="nav">
        <span className="nav-link"><Link to="/">Menu</Link></span>
        <span className="nav-link"><Link to="/CrearTarea">Crear Tarea</Link> </span>
      </nav>
    </header>
  )
}

/*function Menu(){
  return (
    <div>
      <nav className="nav">
        <span className="nav-link"><Link to="/">Menu</Link></span>
        <span className="nav-link"><Link to="/CrearTarea">Crear Tarea</Link></span>
        <span className="nav-link"><Link to="/CrearMateria">Crear Materia</Link></span>
        <span className="nav-link"><Link to="/Tareas">Tareas</Link></span>
      </nav>
      <Outlet/>
    </div>
    )
}*/

function Error404(){
  return (
    <div>
      <h1>404 (Not Found)</h1>
      <Link to="/">Ir a menu</Link>
    </div>
  )
}

function Menu(){
}

function CrearTarea(){
  return(
    <div className='card'>
      <form className='card-body' onSubmit={}>
        <input type='text' name='nombre' className='form-control'/>
        <LeerMateria/>
        <input type='date' name='fecha' className='form-control'/>
        <input type='text' name='descrpcion' className='form-control'/>
        <input type='number' name='valor' className='form-control'/>
        <button type='submit' className='btn-success'>Subir Tarea</button>
        <Link to='/' className='btn-danger'>Cancelar</Link>
      </form>
    </div>
  )
}


function LeerTarea(){
  
}

function BorrarTarea(){
  //return()
}

function CrearMateria(){
  //return()
}

function LeerMateria(){
  //return()
}

function BorrarMateria(){
  //return()
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
