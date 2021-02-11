// IMPORTS

import axios from "axios";

// ACTION TYPES
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// ACTIONS

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/products/");
      dispatch({
        type: FETCH_PRODUCTS,
        payload: { products: response.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:8000/products/`, newProduct);
      dispatch({
        type: CREATE_PRODUCT,
        payload: { newProduct },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: { productId },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        updatedProduct
      );
      dispatch({
        type: UPDATE_PRODUCT,
        payload: { updatedProduct },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
