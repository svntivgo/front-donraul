import { createStore } from "redux";

const initialState = {
  container: [

  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ELEMENTS":
      return {
        container: action.data
      }
    default:
      return state
  }
};

export default createStore(reducer);
