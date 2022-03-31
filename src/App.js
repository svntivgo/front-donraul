import React, { Fragment } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from "./components/Home";
import Facturacion from "./components/Facturacion";
import Inventario from "./components/Inventario";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <Facturacion/>
      <Inventario/>
    </Fragment>
  );
}

export default App;
