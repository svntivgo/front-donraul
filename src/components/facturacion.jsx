import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { addToFactura, getAll, removeFromFactura } from "../actions/actions";
import Table from "../features/Table";
import { apiBase } from "../App";

const Facturacion = ({inventario, getInventario, agregarProducto, productosFactura, eliminarProducto}) => {
  useEffect(() => {
    getInventario();

  }, [])

  const data = useSelector(state => {
    return state
  })

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
    let botonAgregar = document
        .getElementById(`btn-agregar-${producto.nombre}-factura`)

    let inputCantidad = document
        .getElementById(`input-agregar-${producto.nombre}-factura`)

    let cantidadIngresada = inputCantidad.value

    if (cantidadIngresada > 0) {
      producto.cantidad = Number(cantidadIngresada);
      inputCantidad.value = "";
      botonAgregar.disabled = true;
      agregarProducto(producto);
      return
    }
    alert("Ingrese una cantidad correcta")
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
                id={`input-agregar-${data.nombre}-factura`}
                required
                type="number"
                placeholder="Cantidad"
                min="0"
                max={data.cantidad}
                onChange={(e) => verificarCantidad(e.target, data.cantidad)}
              ></input>
              <button
                id={`btn-agregar-${data.nombre}-factura`}
                onClick={() => capturarProducto(data)}
              >
                agregar
              </button>
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
      <Table columns={columnsFactura} data={data.factura} />
      <button>Facturar venta</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  inventario: state.container,
  productosFactura: state.factura,
});

const mapDispatchToProps = (dispatch) => ({
  getInventario() {
    getAll(apiBase+"/productos", dispatch);
  },
  agregarProducto(producto) {
    addToFactura(producto, dispatch)
  },
  eliminarProducto(producto) {
    removeFromFactura(producto, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Facturacion);
