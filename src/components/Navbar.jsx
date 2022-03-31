import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/facturacion">Nueva factura</Link>
        <Link to="/inventario">Nuevo volante</Link>
        <Link to="/">Facturas</Link>
        <Link to="/">Inventario</Link>
        <Link to="/">Clientes</Link>
        <Link to="/">Proveedores</Link>
        <Link to="/">Cerrar sesión</Link>
      </nav>
    </>
  );
}

export default Navbar
