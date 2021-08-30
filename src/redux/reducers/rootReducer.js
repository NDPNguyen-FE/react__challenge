import { combineReducers } from "redux";
import productsReducer from "../reducers/products.reducer";
import filterReducer from "../reducers/filter.reducer";

const rootReducer = () =>
  combineReducers({
    products: productsReducer,
    filters: filterReducer,
  });

export default rootReducer;
