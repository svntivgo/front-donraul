import { createStore } from "redux";

export const initialState = {
  container: [],
  auth: false,
  factura: [],
  volante: [],
  proveedor: {},
  cliente: {},
  vendedor: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ELEMENTS":
      state.container = [];
      return {
        ...state,
        container: action.data,
      };
    case "SET_AUTH":
      return {
        auth: !action.data,
      };
    case "ADD_FACTURA":
      return {
        ...state,
        factura: [...state.factura, action.data],
      };
    case "REMOVE_FACTURA":
      let filtroFactura = state.factura.filter((x) => x.id !== action.data.id);
      return {
        ...state,
        factura: filtroFactura,
      };
    case "ADD_VOLANTE":
      return {
        ...state,
        volante: [...state.volante, action.data],
      };
    case "REMOVE_VOLANTE":
      let filtroVolante = state.volante.filter((x) => x.id !== action.data.id);
      return {
        ...state,
        volante: filtroVolante,
      };
    case "SET_PROVEEDOR":
      return {
        ...state,
        proveedor: action.data,
      };
    case "SENT_VOLANTE":
      return {
        ...state,
        proveedor: {},
        volante: [],
      };
    default:
      return state;
  }
};

export default () => {
  return {
    ...createStore(reducer)
  }
}
