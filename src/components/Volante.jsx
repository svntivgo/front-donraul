import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import { addToVolante, getAll, removeFromVolante } from '../actions/actions';
import { apiBase } from '../App';
import Table from '../features/Table';

const Volante = ({getInventario, inventario, agregarProducto, eliminarProducto}) => {
  useEffect(() => {
    getInventario();

  }, [])

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
            return `${data.cantidadMinima} - ${data.cantidadMaxima}`
        }
      },
      {
        Header: "",
        id: "botones",
        accessor: (data) => {
          return (
            <div>
              <input
                id={`input-agregar-${data.nombre}-volante`}
                required
                type="number"
                placeholder="Cantidad"
                min="0"
                max={data.cantidad}
                onChange={(e) => verificarCantidad(e.target, data.cantidad)}
              ></input>
              <button
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
      <h1>Creación de volante</h1>
      <Table columns={columns} data={inventario} />
      <h1>Volante</h1>
      <Table columns={columnsVolante} data={data.volante} />
      <button>Guardar volante</button>
    </>
  );
}

const mapStateToProps = (state) => ({
  inventario: state.container,
  productosVolante: state.volante,
});

const mapDispatchToProps = (dispatch) => ({
  getInventario() {
    getAll(apiBase+"/productos", dispatch);
  },
  agregarProducto(producto) {
    addToVolante(producto, dispatch);
  },
  eliminarProducto(producto) {
    removeFromVolante(producto, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Volante);
