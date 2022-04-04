import React from 'react'
import { connect } from 'react-redux';
import { postCliente } from '../actions/actions';
import { apiBase } from '../App';

const CrearCliente = ({enviarCliente}) => {
  function capturarCliente(e) {
    e.preventDefault()
    let nombre = e.target.nombre.value;
    let numIdentificacion = e.target.cedula.value;
    let celular = e.target.celular.value;

    let cliente = {nombre,numIdentificacion,celular}
    enviarCliente(cliente)
  }

  return (
    <div className="crear__container">
      <h1>Crear cliente</h1>
      <form onSubmit={(e) => capturarCliente(e)}>
        <input
          required
          name="nombre"
          id="nombre"
          type="text"
          placeholder="nombre"
        ></input>
        <input
          required
          name="cedula"
          id="cedula"
          type="number"
          placeholder="cedula"
        ></input>
        <input
          required
          name="celular"
          id="celular"
          type="number"
          placeholder="celular"
        ></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  enviarCliente(cliente) {
    postCliente(
      `${apiBase}/cliente`,
      cliente,
      dispatch
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CrearCliente);
