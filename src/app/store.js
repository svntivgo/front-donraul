import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import store from "./reducers/Reducer";

export const store1 = configureStore({
  reducer: {
    hola: store1
  },
});
