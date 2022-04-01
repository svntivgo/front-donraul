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
