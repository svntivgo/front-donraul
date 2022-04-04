import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  addToVolante,
  getAll,
  postVolante,
  removeFromVolante,
  setProveedor,
} from "../actions/actions";
import { apiBase } from "../App";
import Table from "../features/Table";

const Volante = ({
  getInventario,
  inventario,
  agregarProducto,
  eliminarProducto,
  getProveedor,
  enviarVolante,
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
      `btn-agregar-${producto.nombre}-volante`
    );

    let inputCantidad = document.getElementById(
      `input-agregar-${producto.nombre}-volante`
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

  function capturarProveedor() {
    let input = document.getElementById("input-proveedor");
    let identificacionProveedor = input.value;

    getProveedor(identificacionProveedor);
  }

  function capturarVolante() {
    let input = document.getElementById("input-proveedor");
    let identificacionProveedor = input.value;

    enviarVolante(identificacionProveedor, data.volante);
    input.value = "";
  }

  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Cantidad",
        accessor: "cantidad",
      },
      {
        Header: "Min-Max",
        id: "min-max",
        accessor: (data) => {
          return `${data.cantidadMinima} - ${data.cantidadMaxima}`;
        },
      },
      {
        Header: "",
        id: "botones",
        accessor: (data) => {
          return (
            <div className="volante__cell inventario">
              <input
                className="volante__input agregar"
                id={`input-agregar-${data.nombre}-volante`}
                required
                type="number"
                placeholder="123"
                min="0"
                max={data.cantidad}
                onChange={(e) => verificarCantidad(e.target, data.cantidad)}
              ></input>
              <button
                className="volante__button agregar"
                id={`btn-agregar-${data.nombre}-volante`}
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

  const columnsVolante = React.useMemo(
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
            <div className="volante__cell">
              <button
                className="volante__button eliminar"
                onClick={() => eliminarProducto(data)}
              >
                Eliminar
              </button>
            </div>
          ) : null;
        },
      },
    ],
    []
  );

  return (
    <div className="volante__container">
      <h1>Creación de volante</h1>
      <Table columns={columns} data={inventario} />
      {data.volante.length > 0 ? (
        <div>
          <h1>Volante</h1>
          <Table columns={columnsVolante} data={data.volante} />
          <div>
            <input
              id="input-proveedor"
              className="volante__input proveedor"
              type="number"
              placeholder="identificacion proveedor"
            ></input>
            <button
              className="volante__button cliente"
              onClick={() => capturarProveedor()}
            >
              Buscar proveedor
            </button>
            {data.proveedor.nombre ? (
              <p>
                Cedula: {data.proveedor.numIdentificacion}, Nombre:{" "}
                {data.proveedor.nombre}
              </p>
            ) : (
              <p>Ingrese un numero de cedula válido</p>
            )}
          </div>
          <button
            className="volante__button volante"
            onClick={() => capturarVolante()}
          >
            Guardar volante
          </button>
        </div>
      ) : (
        <h2>Agregue un producto para comenzar</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  inventario: state.container,
  productosVolante: state.volante,
});

const mapDispatchToProps = (dispatch) => ({
  getInventario() {
    getAll(apiBase + "/productos", dispatch);
  },
  agregarProducto(producto) {
    addToVolante(producto, dispatch);
  },
  eliminarProducto(producto) {
    removeFromVolante(producto, dispatch);
  },
  getProveedor(identificacion) {
    setProveedor(
      apiBase + "/proveedor/?numIdentificacion=" + identificacion,
      dispatch
    );
  },
  enviarVolante(identificacion, productos) {
    postVolante(
      `${apiBase}/volante/?numIdentificacion=${identificacion}`,
      productos,
      dispatch
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Volante);
