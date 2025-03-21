
import {PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL } from "../constants/productConstant";




  
  export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] };
  
      case PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: Array.isArray(action.payload) ? action.payload : action.payload.products || [],
          page: action.payload.page || 1,
          pages: action.payload.pages || 1,
        };
  
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };