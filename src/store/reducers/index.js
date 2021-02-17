import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  products: productReducer,
  shops: shopReducer,
});

export default rootReducer;
