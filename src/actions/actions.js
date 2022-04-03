export function getAll(url, dispatch) {
  fetch(url, {
    crossDomain: true,
    method: "GET",
  })
    .then((reponse) => reponse.json())
    .then((data) => {
      dispatch({ type: "GET_ALL_ELEMENTS", data });
    });
}

export function setAuth(auth, dispatch) {
  const data = auth
  dispatch({type: "SET_AUTH", data})
}

export function addToFactura(producto, dispatch) {
  const data = producto;
  dispatch({ type: "ADD_FACTURA", data });
}

export function removeFromFactura(producto, dispatch) {
  const data = producto;
  dispatch({ type: "REMOVE_FACTURA", data });
}

export function setCliente(url, dispatch) {
  fetch(url, {
    crossDomain: true,
    method: "GET",
  })
    .then((reponse) => reponse.json())
    .then((data) => {
      dispatch({ type: "SET_CLIENTE", data });
    });
}

export function setVendedor(url, dispatch) {
  fetch(url, {
    crossDomain: true,
    method: "GET",
  })
    .then((reponse) => reponse.json())
    .then((data) => {
      dispatch({ type: "SET_VENDEDOR", data });
    });
}

export function postFactura(url, productos, dispatch) {
  fetch(url, {
    crossDomain: true,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productos),
  })
    .then((reponse) => reponse.json())
    .then((data) => {
      alert("Se envió correctamente");
      dispatch({ type: "SENT_FACTURA" });
    });
}

export function addToVolante(producto, dispatch) {
  const data = producto;
  dispatch({ type: "ADD_VOLANTE", data });
}

export function removeFromVolante(producto, dispatch) {
  const data = producto;
  dispatch({ type: "REMOVE_VOLANTE", data });
}

export function setProveedor(url, dispatch) {
  fetch(url, {
    crossDomain:true,
    method: 'GET',
  })
    .then((reponse) => reponse.json())
    .then((data) => {
      dispatch({ type: "SET_PROVEEDOR", data });
    });
}

export function postVolante(url, productos, dispatch) {
  fetch(url, {
    crossDomain: true,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      productos
    ),
  })
    .then((reponse) => reponse.json())
    .then((data) => {
      alert("Se envió correctamente")
      dispatch({ type: "SENT_VOLANTE"});
    });
}
