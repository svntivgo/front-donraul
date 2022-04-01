import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAll, setProductosFactura } from "../actions/actions";
import Table from "../features/Table";

const Facturacion = ({inventario, getInventario, agregarProducto, productosFactura}) => {

  const [factura, setFactura] = useState([])

  function agregarProducto1(producto) {
    // setFactura((factura) => [...factura, producto]);
    agregarProducto(producto)
    console.log(productosFactura)
  }

  useEffect(() => {
    console.log(factura)

  }, [factura])


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
              <button onClick={() => agregarProducto1(data)}>agregar</button>
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
  productosFactura: state.productos,
});

const url = "http://localhost:8080/api/productos";

const mapDispatchToProps = (dispatch) => ({
  getInventario() {
    getAll(url, dispatch);
  },
  agregarProducto(producto) {
    setProductosFactura(producto, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Facturacion);
