// store.js
import { configureStore } from "@reduxjs/toolkit";
import { productListReducer } from "./reducers/productReducer";
import { productDetailsReducer } from "./reducers/productDetailsReducer";

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
