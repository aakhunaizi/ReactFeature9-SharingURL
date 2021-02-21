import instance from "./instance";

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      await instance.post("/signup", newUser);
      history.push("/");
      alert("Successfully signed up");
    } catch (error) {
      console.error(error);
    }
  };
};
