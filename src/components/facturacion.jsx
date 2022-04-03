import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  addToFactura,
  getAll,
  postFactura,
  removeFromFactura,
  setCliente,
  setVendedor,
} from "../actions/actions";
import Table from "../features/Table";
import { apiBase } from "../App";

const Facturacion = ({
  inventario,
  getInventario,
  agregarProducto,
  productosFactura,
  eliminarProducto,
  getCliente,
  getVendedor,
  enviarFactura,
}) => {
  useEffect(() => {
    getInventario();
  }, []);

  const data = useSelector((state) => {
    return state;
  });

  function verificarCantidad(input, cantidad) {
    if (input.value > cantidad) {
      alert("Excede la cantidad de productos");
      input.value = "";
    }

    if (input.value < 0) {
      alert("Debe ser un valor positivo");
      input.value = "";
    }
  }

  function capturarProducto(producto) {
    let botonAgregar = document.getElementById(
      `btn-agregar-${producto.nombre}-factura`
    );

    let inputCantidad = document.getElementById(
      `input-agregar-${producto.nombre}-factura`
    );

    let cantidadIngresada = inputCantidad.value;

    if (cantidadIngresada > 0) {
      producto.cantidad = Number(cantidadIngresada);
      inputCantidad.value = "";
      botonAgregar.disabled = true;
      agregarProducto(producto);
      return;
    }
    alert("Ingrese una cantidad correcta");
  }

  function capturarCliente() {
    let inputCliente = document.getElementById("input-cliente");
    let identificacionCliente = inputCliente.value;

    getCliente(identificacionCliente);
  }

  function capturarVendedor() {
    let inputVendedor = document.getElementById("input-vendedor");
    let identificacionVendedor = inputVendedor.value;
    getVendedor(identificacionVendedor);
  }

  function capturarFactura() {
    let inputCliente = document.getElementById("input-cliente");
    let identificacionCliente = inputCliente.value;
    let inputVendedor = document.getElementById("input-vendedor");
    let identificacionVendedor = inputVendedor.value;

    enviarFactura(identificacionCliente, identificacionVendedor, data.factura);
    inputCliente.value = "";
    inputVendedor.value = "";
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
          return data ? (
            <div>
              <button onClick={() => eliminarProducto(data)}>Eliminar</button>
            </div>
          ) : null;
        },
      },
    ],
    []
  );

  return (
    <>
      <h1>Lista de productos</h1>
      <Table columns={columns} data={inventario} />
      {data.factura.length > 0 ? (
        <div>
          <h1>Factura</h1>
          <Table columns={columnsFactura} data={data.factura} />
          <div>
            <input
              id="input-cliente"
              type="number"
              placeholder="identificacion cliente"
            ></input>
            <button onClick={() => capturarCliente()}>Buscar cliente</button>
            {data.cliente.nombre ? (
              <p>
                Cedula: {data.cliente.numIdentificacion}, Nombre:{" "}
                {data.cliente.nombre}
              </p>
            ) : (
              <p>Ingrese un numero de cedula válido</p>
            )}
          </div>
          <div>
            <input
              id="input-vendedor"
              type="number"
              placeholder="identificacion vendedor"
            ></input>
            <button onClick={() => capturarVendedor()}>Buscar vendedor</button>
            {data.vendedor.nombre ? (
              <p>
                Cedula: {data.vendedor.numIdentificacion}, Nombre:{" "}
                {data.vendedor.nombre}
              </p>
            ) : (
              <p>Ingrese un numero de cedula válido</p>
            )}
          </div>
          <button onClick={() => capturarFactura()}>Facturar venta</button>
        </div>
      ) : (
        <h2>Agregue un producto para comenzar</h2>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  inventario: state.container,
  productosFactura: state.factura,
});

const mapDispatchToProps = (dispatch) => ({
  getInventario() {
    getAll(apiBase + "/productos", dispatch);
  },
  agregarProducto(producto) {
    addToFactura(producto, dispatch);
  },
  eliminarProducto(producto) {
    removeFromFactura(producto, dispatch);
  },
  getCliente(identificacion) {
    setCliente(
      apiBase + "/cliente/?numIdentificacion=" + identificacion,
      dispatch
    );
  },
  getVendedor(identificacion) {
    setVendedor(
      apiBase + "/vendedor/?numIdentificacion=" + identificacion,
      dispatch
    );
  },
  enviarFactura(cedulaCliente, cedulaVendedor, productos) {
    postFactura(
      `${apiBase}/factura/?cedulaCliente=${cedulaCliente}&cedulaVendedor=${cedulaVendedor}`,
      productos,
      dispatch
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Facturacion);
