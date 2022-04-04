import React from "react";
import { connect } from "react-redux";
import { postProveedor } from "../actions/actions";
import { apiBase } from "../App";

const CrearProveedor = ({ enviarProveedor }) => {
  function capturarProveedor(e) {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let numIdentificacion = e.target.cedula.value;
    let celular = e.target.celular.value;

    let proveedor = { nombre, numIdentificacion, celular };
    enviarProveedor(proveedor);
  }

  return (
    <div className="crear__container">
      <h1>Crear proveedor</h1>
      <form onSubmit={(e) => capturarProveedor(e)}>
        <input
          name="nombre"
          id="nombre"
          type="text"
          placeholder="nombre"
        ></input>
        <input
          name="cedula"
          id="cedula"
          type="number"
          placeholder="cedula"
        ></input>
        <input
          name="celular"
          id="celular"
          type="number"
          placeholder="celular"
        ></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  enviarProveedor(proveedor) {
    postProveedor(`${apiBase}/proveedor`, proveedor, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CrearProveedor);
