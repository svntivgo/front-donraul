import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll } from "../actions/actions";
import { apiBase } from "../App";
import Table from "../features/Table";

const Facturas = ({ facturas, getFacturas }) => {
  useEffect(() => {
    getFacturas();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id"
      },
      {
        Header: "Fecha",
        accessor: "fecha",
      },
      {
        Header: "Cliente",
        accessor: "cliente.numIdentificacion",
      },
      {
        Header: "Vendedor",
        accessor: "vendedor.nombre",
      },
      {
        Header: "Productos",
        id: "productos",
        accessor: (data) => {
          let output = [];
          data.productos?.map((item) => {
            return output.push(
              `${item.nombre}(${item.cantidad})x$${item.precio}`
            );
          });
          return output.join(` `);
        },
      },
      {
        Header: "Total",
        id: "total",
        accessor: (data) => {
          return `$${data.total}`;
        },
      },
    ],
    []
  );

  return (
    <div className="facturas__container">
      <h1>Facturas</h1>
      <Table columns={columns} data={facturas} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  facturas: state.container,
});

const mapDispatchToProps = (dispatch) => ({
  getFacturas() {
    getAll(apiBase + "/facturas", dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Facturas);
