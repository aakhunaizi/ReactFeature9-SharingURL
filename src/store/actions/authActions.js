import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../actions/types";

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch({
        type: types.SET_USER,
        payload: decode(res.data.token),
      });
      history.push("/");
      alert("Successfully signed up");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);
      dispatch({
        type: types.SET_USER,
        payload: decode(res.data.token),
      });
      history.push("/");
      alert("Successfully signed in");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.SET_USER,
        payload: null,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
