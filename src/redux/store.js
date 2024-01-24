import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./session/sessionSlice";
import productReducer from "./products/productSlice";
import userAddresReducer from "./user-address/userAddresSlice";

const store = configureStore({
  reducer: {
    session: sessionReducer,
    product: productReducer,
    userAddress: userAddresReducer,
  },
});

export default store;
