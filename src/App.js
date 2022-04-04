import React from "react";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Facturacion from "./components/Facturacion";
import Volante from "./components/Volante";
import Facturas from "./components/Facturas";
import Inventario from "./components/Inventario";
import Clientes from "./components/Clientes";
import Proveedores from "./components/Proveedores";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Login from "./components/Login";
import Registrar from "./components/Registrar";
import CrearCliente from "./components/CrearCliente";
import CrearProveedor from "./components/CrearProveedor";

export const apiBase = "https://svntivgo-donraul.herokuapp.com/api";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registrar" element={<Registrar />} />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/facturacion"
          element={
            <ProtectedRoute>
              <Facturacion />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/volante"
          element={
            <ProtectedRoute>
              <Volante />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/facturas"
          element={
            <ProtectedRoute>
              <Facturas />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/inventario"
          element={
            <ProtectedRoute>
              <Inventario />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/clientes"
          element={
            <ProtectedRoute>
              <Clientes />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/crear-cliente"
          element={
            <ProtectedRoute>
              <CrearCliente />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/proveedores"
          element={
            <ProtectedRoute>
              <Proveedores />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/crear-proveedor"
          element={
            <ProtectedRoute>
              <CrearProveedor />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
