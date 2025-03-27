// store.js
import { configureStore } from "@reduxjs/toolkit";
import { productListReducer } from "./reducers/productReducer";
import { productDetailsReducer } from "./reducers/productDetailsReducer";
import { cartReducer } from "./reducers/cartReducer";

const cartItemFromStorage = (() => {
  try {
    console.log(
      "Cart Items in Local Storage:",
      localStorage.getItem("cartItems")
    );

    return localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  } catch (error) {
    console.error("Error parsing cartItems from localStorage:", error);
    return [];
  }
})();

const initialState = {
  cart: { cartItems: cartItemFromStorage },
};

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
