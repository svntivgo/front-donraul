import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { unsetAuth } from "../actions/actions";

const Navbar = ({ authHandle }) => {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/facturacion">Nueva factura</Link>
        <Link to="/volante">Nuevo volante</Link>
        <Link to="/facturas">Facturas</Link>
        <Link to="/inventario">Inventario</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/proveedores">Proveedores</Link>
        <Link onClick={authHandle} to="/login">
          Cerrar sesión
        </Link>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  authHandle() {
    unsetAuth(dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
