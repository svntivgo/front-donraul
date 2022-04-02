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

export function setProductosFactura(producto, dispatch) {
  const data = producto;
  dispatch({ type: "ADD_PRODUCTOS_FACTURA", data });
}

export function removeProductosFactura(producto, dispatch) {
  const data = producto;
  dispatch({ type: "REMOVE_PRODUCTOS_FACTURA", data });
}
