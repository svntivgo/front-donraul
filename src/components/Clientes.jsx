import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll } from "../actions/actions";
import { apiBase } from "../App";
import Table from "../features/Table";

const Clientes = ({ clientes, getClientes }) => {
  useEffect(() => {
    getClientes();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Cedula",
        accessor: "numIdentificacion",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Celular",
        accessor: "celular",
      },
    ],
    []
  );

  return (
    <div className="clientes__container">
      <h1>Clientes</h1>
      <Table columns={columns} data={clientes} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  clientes: state.container,
});

const mapDispatchToProps = (dispatch) => ({
  getClientes() {
    getAll(apiBase + "/clientes", dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Clientes);
