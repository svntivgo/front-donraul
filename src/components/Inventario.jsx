import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getAll } from '../actions/actions';
import Table from '../features/Table';

const Inventario = ({inventario, getInventario}) => {

  useEffect(() => {
    getInventario();
  }, [])

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
    <>
      <h1>Inventario</h1>
      <Table columns={columns} data={inventario} />
    </>
  );
}

const mapStateToProps = (state) => ({
  inventario : state.container,
});

const url = "http://localhost:8080/api/productos";

const mapDispatchToProps = (dispatch) => ({
  getInventario(){
    getAll(url, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventario);
