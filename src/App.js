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
import Proveedores from "./components/Proveedores";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebaseApp from './firebase/credentials';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/facturacion" element={<Facturacion />} />
          <Route exact path="/volante" element={<Volante />} />
          <Route exact path="/facturas" element={<Facturas />} />
          <Route exact path="/inventario" element={<Inventario />} />
          <Route exact path="/clientes" element={<Clientes />} />
          <Route exact path="/proveedores" element={<Proveedores />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
