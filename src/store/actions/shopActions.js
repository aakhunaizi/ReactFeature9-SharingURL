// IMPORTS

import instance from "./instance";

// ACTION TYPES

import * as types from "./types";

// ACTIONS

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/shops/");
      dispatch({
        type: types.FETCH_SHOPS,
        payload: { shops: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createShop = (newShop) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const res = await instance.post("/shops/", formData);
      dispatch({
        type: types.CREATE_SHOP,
        payload: { newShop: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
