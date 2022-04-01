export function getAll(url, dispatch) {
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      dispatch({ type: "TRAER", data });
    })
}
