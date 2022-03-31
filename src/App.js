import React, { Fragment } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Facturacion from "./components/Facturacion";

function App() {
  return (
    <Fragment>
      <h1>Don Raúl</h1>
      <h2>Aministrador de inventarios y facturación</h2>
      <h3>Inicio de sesión</h3>
      <form>
        <input type={"email"}></input>
        <input type={"password"}></input>
        <button>Iniciar Sesión</button>
      </form>
      <button>Iniciar sesión con Gmail</button>
      <button>Registrarse</button>
      <Facturacion/>
    </Fragment>
  );
}

export default App;
