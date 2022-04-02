import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { getAll, removeProductosFactura, setProductosFactura } from "../actions/actions";
import Table from "../features/Table";

const Facturacion = ({inventario, getInventario, agregarProducto, productosFactura, eliminarProducto}) => {

  useEffect(() => {
    getInventario();
  }, []);

  const data = useSelector(state => {
    return state
  })
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

  function capturarProducto(producto) {
    let inputCantidad = document.getElementById(`input-agregar-${producto.nombre}`)
    let cantidadIngresada = inputCantidad.value

    producto.cantidad = Number(cantidadIngresada)
    agregarProducto(producto)

    cantidadIngresada = ""
  }

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
          return data?(
            <div>
              <button onClick={() => eliminarProducto(data)}>Eliminar</button>
            </div>
          ):null
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
  },
  eliminarProducto(producto) {
    removeProductosFactura(producto, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Facturacion);
