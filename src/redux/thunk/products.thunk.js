import productsApi from "../../api/productsApi";
import * as actions from "../actions/product.action";

export const getAllProducts = () => (dispatch) => {
  dispatch(actions.getAllProductsStart());

  productsApi
    .getAllProducts()
    .then((allProducts) => dispatch(actions.getAllProductsSuccess(allProducts)))
    .catch((error) => dispatch(actions.getAllProductsError(error)));
};

export const getFilterProducts = (payload) => (dispatch) => {
  dispatch(actions.getFilterProductsStart());

  productsApi
    .getProducts(payload)
    .then((product) => dispatch(actions.getFilterProductsSuccess(product)))
    .catch((error) => dispatch(actions.getFilterProductsError(error)));
};
