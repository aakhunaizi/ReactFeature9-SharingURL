// IMPORTS

import instance from "./instance";

// ACTION TYPES

import * as types from "./types";

// ACTIONS

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/products/");
      dispatch({
        type: types.FETCH_PRODUCTS,
        payload: { products: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const res = await instance.post(
        `/shops/${newProduct.shopId}/products`,
        formData
      );
      dispatch({
        type: types.CREATE_PRODUCT,
        payload: { newProduct: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/products/${productId}`);
      dispatch({
        type: types.DELETE_PRODUCT,
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
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      const res = await instance.put(
        `/products/${updatedProduct.id}`,
        formData
      );
      dispatch({
        type: types.UPDATE_PRODUCT,
        payload: { updatedProduct: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
