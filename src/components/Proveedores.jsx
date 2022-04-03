import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll } from "../actions/actions";
import { apiBase } from "../App";
import Table from "../features/Table";

const Proveedores = ({ proveedores, getProveedores }) => {
  useEffect(() => {
    getProveedores();
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
    <>
      <h1>Proveedores</h1>
      <Table columns={columns} data={proveedores} />
    </>
  );
};

const mapStateToProps = (state) => ({
  proveedores: state.container,
});

const mapDispatchToProps = (dispatch) => ({
  getProveedores() {
    getAll(apiBase + "/proveedores", dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Proveedores);
