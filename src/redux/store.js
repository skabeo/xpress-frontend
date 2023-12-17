import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./session/sessionSlice";
import productReducer from "./products/productSlice";

const store = configureStore({
  reducer: {
    session: sessionReducer,
    product: productReducer
  },
});

export default store;
