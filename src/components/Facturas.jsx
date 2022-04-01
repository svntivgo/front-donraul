import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll } from "../actions/actions";
import Table from "../features/Table";

const Facturas = ({ facturas, getFacturas }) => {
  useEffect(() => {
    getFacturas();
  }, []);

  const columns = React.useMemo(
    () => [
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
        accessor: data => {
          let output = [];
          data.productos?.map(item => {
            return output.push(`${item.nombre}(${item.cantidad})x$${item.precio}`);
          });
          return output.join(` `);
        }
      },
    ],
    []
  );

  return (
    <>
      <h1>Facturas</h1>
      <Table columns={columns} data={facturas} />
    </>
  );
};

const mapStateToProps = (state) => ({
  facturas: state.container,
});

const url = "http://localhost:8080/api/facturas";

const mapDispatchToProps = (dispatch) => ({
  getFacturas() {
    getAll(url, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Facturas);
