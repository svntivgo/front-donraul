import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/facturacion">Nueva factura</Link>
        <Link to="/volante">Nuevo volante</Link>
        <Link to="/">Facturas</Link>
        <Link to="/inventario">Inventario</Link>
        <Link to="/">Clientes</Link>
        <Link to="/">Proveedores</Link>
        <Link to="/">Cerrar sesión</Link>
      </nav>
    </>
  );
}

export default Navbar
