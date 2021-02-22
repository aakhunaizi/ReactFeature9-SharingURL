import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "../store/reducers/";
import { checkForToken } from "./actions/authActions";

// Actions
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchProducts());
store.dispatch(fetchShops());
store.dispatch(checkForToken());

export default store;
