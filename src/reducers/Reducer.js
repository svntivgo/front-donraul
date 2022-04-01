import { createStore } from "redux";

const initialState = {
  container: [],
  auth: false
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
    default:
      return state;
  }
};

export default createStore(reducer);
