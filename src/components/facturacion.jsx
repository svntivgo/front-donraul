import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { getAll, setProductosFactura } from "../actions/actions";
import Table from "../features/Table";

const Facturacion = ({inventario, getInventario, agregarProducto, productosFactura}) => {

  const data = useSelector(state => {
    return state
  })

  function capturarProducto(producto) {
    let inputCantidad = document.getElementById(`input-agregar-${producto.nombre}`)
    let cantidadIngresada = inputCantidad.value

    producto.cantidad = Number(cantidadIngresada)
    agregarProducto(producto)

    cantidadIngresada = ""
  }
  console.log(data.productos)

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
                id={`input-agregar-${data.nombre}`}
                required
                type="number"
                placeholder="Cantidad"
                min="0"
                max={data.cantidad}
                onChange={(e) => verificarCantidad(e.target, data.cantidad)}
              ></input>
              <button onClick={() => capturarProducto(data)}>agregar</button>
            </div>
          );
        },
      },
    ],
    []
  );

  const columnsFactura = React.useMemo(
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
              <button onClick={() => capturarProducto(data)}>Eliminar</button>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <h1>Lista de productos</h1>
      <Table columns={columns} data={inventario} />
      <h1>Factura</h1>
      <Table columns={columnsFactura} data={data.productos} />
      <button>Facturar venta</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  inventario: state.container,
  productosFactura: state.productos,
});

const url = "https://svntivgo-donraul.herokuapp.com/api/productos";

const mapDispatchToProps = (dispatch) => ({
  getInventario() {
    getAll(url, dispatch);
  },
  agregarProducto(producto) {
    setProductosFactura(producto, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Facturacion);
