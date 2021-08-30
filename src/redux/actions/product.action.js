import { productType } from "../actionType/product.actionType";

export const getAllProductsStart = () => ({
  type: productType.GET_ALL_PRODUCTS_START,
});

export const getAllProductsSuccess = (allProducts) => ({
  type: productType.GET_ALL_PRODUCTS_SUCCESS,
  payload: allProducts,
});

export const getAllProductsError = (error) => ({
  type: productType.GET_ALL_PRODUCTS_ERROR,
  payload: error,
});

export const getFilterProductsStart = () => ({
  type: productType.GET_FILTER_PRODUCT_START,
});

export const getFilterProductsSuccess = (allProducts) => ({
  type: productType.GET_FILTER_PRODUCT_SUCCESS,
  payload: allProducts,
});

export const getFilterProductsError = (error) => ({
  type: productType.GET_FILTER_PRODUCT_ERROR,
  payload: error,
});
