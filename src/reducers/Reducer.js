import { createStore } from "redux";

const initialState = {
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
      break
    case "SET_AUTH":
      return {
        auth: !action.data,
      };
      break
    case "ADD_PRODUCTOS_FACTURA":
      // console.log(action.data)
      return {
        ...state,
        productos: [...state.productos, action.data]
      };
      break
    default:
      return state;
  }
};

export default () => {
  return {
    ...createStore(reducer)
  }
}
