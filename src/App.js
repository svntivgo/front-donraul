import React, { Fragment } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import store from "./reducers/Reducer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Facturacion from "./components/Facturacion";
import Volante from "./components/Volante";
import Facturas from './components/Facturas';
import Inventario from "./components/Inventario";
import Clientes from "./components/Clientes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facturacion" element={<Facturacion />} />
          <Route path="/volante" element={<Volante />} />
          <Route path="/facturas" element={<Facturas />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
