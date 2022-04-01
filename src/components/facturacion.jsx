import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll } from "../actions/actions";
import Table from "../features/Table";

const Facturacion = ({inventario, getInventario}) => {

  function verificarCantidad(input, cantidad) {
    if (input.value > cantidad) {
      alert("Excede la cantidad de productos")
      input.value = ""
    }

    if (input.value < 0) {
      alert("Debe ser un valor positivo")
      input.value = ""
    }
  }



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
        Header: "",
        id: "botones",
        accessor: (data) => {
          return (
            <div>
              <input
                required
                type="number"
                placeholder="Cantidad"
                min="0"
                max={data.cantidad}
                onChange={(e) => verificarCantidad(e.target, data.cantidad)}
              ></input>
              <button onClick={() => console.log(data)}>agregar</button>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <h1>Facturacion</h1>
      <Table columns={columns} data={inventario} />
      <button>Facturar venta</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  inventario: state.container,
});

const url = "http://localhost:8080/api/productos";

const mapDispatchToProps = (dispatch) => ({
  getInventario() {
    getAll(url, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Facturacion);
