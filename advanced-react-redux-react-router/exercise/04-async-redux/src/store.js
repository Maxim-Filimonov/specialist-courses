import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer';
export const setupStore = () => configureStore({ reducer: reducer });
const store = setupStore();
export default store;