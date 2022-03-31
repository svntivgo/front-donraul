import { createStore } from "redux";

const initialState = {
  inventario: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INVENTARIO":
      return {
        inventario: action
      }
    default:
      return state
  }
};

export default createStore(reducer);
