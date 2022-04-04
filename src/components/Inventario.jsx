import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll } from "../actions/actions";
import { apiBase } from "../App";
import Table from "../features/Table";

const Inventario = ({ inventario, getInventario }) => {
  useEffect(() => {
    getInventario();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Precio",
        accessor: "precio",
      },
      {
        Header: "Cantidad",
        accessor: "cantidad",
      },
      {
        Header: "Estado",
        accessor: "estado",
      },
    ],
    []
  );

  return (
    <div className="inventario__container">
      <h1>Inventario</h1>
      <Table columns={columns} data={inventario} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  inventario: state.container,
});

const mapDispatchToProps = (dispatch) => ({
  getInventario() {
    getAll(apiBase + "/productos", dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventario);
