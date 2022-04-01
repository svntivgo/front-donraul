import { createStore } from "redux";

const initialState = {
  container: [],
  auth: false,
  productos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ELEMENTS":
      return {
        container: action.data,
      };
    case "SET_AUTH":
      return {
        auth: !action.data,
      };
    case "ADD_PRODUCTOS_FACTURA":
      let productos = state.productos
      console.log(action.data)
      return {
          ...state,
          productos: action.data
        }
    default:
      return state;
  }
};

export default createStore(reducer);
