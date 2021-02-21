import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  products: productReducer,
  shops: shopReducer,
  authentication: authReducer,
});

export default rootReducer;
