import React from "react";
import { FaBars } from "react-icons/fa";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { unsetAuth } from "../actions/actions";

const Navbar = ({ authHandle, auth }) => {
  let navigate = useNavigate();
  function toggleMenu() {
    let navigationButton = document.getElementById("navbar__menu-button");
    let navigationMenu = document.getElementById("navbar__menu");

    navigationButton.classList.toggle("--expanded");
    navigationMenu.classList.toggle("--expanded");
  }

  if (!auth) return <></>;

  return (
    <div className="navbar">
      <h1 onClick={()=> navigate("/")}>Don Raúl</h1>
      <div
        className="navbar__menu-button"
        id="navbar__menu-button"
        onClick={() => toggleMenu()}
      >
        <FaBars />
      </div>
      <div className="navbar__menu" id="navbar__menu">
        <Link to="/">Inicio</Link>
        <Link
          onClick={() => toggleMenu()}
          className="navbar__manu-item"
          to="/facturacion"
        >
          Nueva factura
        </Link>
        <Link
          onClick={() => toggleMenu()}
          className="navbar__manu-item"
          to="/volante"
        >
          Nuevo volante
        </Link>
        <Link
          onClick={() => toggleMenu()}
          className="navbar__manu-item"
          to="/facturas"
        >
          Facturas
        </Link>
        <Link
          onClick={() => toggleMenu()}
          className="navbar__manu-item"
          to="/inventario"
        >
          Inventario
        </Link>
        <Link onClick={authHandle} to="/login">
          Cerrar sesión
        </Link>
      </div>
    </div>
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
