import React, { Fragment } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from "./components/Home";
import Facturacion from "./components/Facturacion";
import Volante from "./components/Volante";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facturacion" element={<Facturacion />} />
        <Route path="/volante" element={<Volante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
