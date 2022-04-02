export function getAll(url, dispatch) {
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      dispatch({ type: "GET_ALL_ELEMENTS", data });
    })
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

export function addToVolante(producto, dispatch) {
  const data = producto;
  dispatch({ type: "ADD_VOLANTE", data });
}

export function removeFromVolante(producto, dispatch) {
  const data = producto;
  dispatch({ type: "REMOVE_VOLANTE", data });
}
