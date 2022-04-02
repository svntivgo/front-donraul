import { createStore } from "redux";

export const initialState = {
  container: [],
  auth: false,
  productos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ELEMENTS":
      return {
        ...state,
        container: action.data,
      };
      break;
    case "SET_AUTH":
      return {
        auth: !action.data,
      };
      break;
    case "ADD_PRODUCTOS_FACTURA":
      return {
        ...state,
        productos: [...state.productos, action.data],
      };
      break;
    case "REMOVE_PRODUCTOS_FACTURA":
      let filtro = state.productos
                    .filter((x) => (x.id !== action.data.id))
      return {
        ...state,
        productos: filtro,
      };
      break;
    default:
      return state;
  }
};

export default () => {
  return {
    ...createStore(reducer)
  }
}
