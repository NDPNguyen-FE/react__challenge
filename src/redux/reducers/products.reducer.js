import { productType } from "../actionType/product.actionType";

const initialState = {
  allProducts: [],
  filterProduct: [],
  isLoading: false,
  totalProducts: 0,
  error: null,
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productType.GET_All_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
        allProducts: [],
        error: null,
      };

    case productType.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: true,
        allProducts: payload,
        totalProducts: payload.length,
      };

    case productType.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        totalProducts: 0,
      };

    case productType.GET_FILTER_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
        filterProduct: [],
        error: null,
      };

    case productType.GET_FILTER_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        filterProduct: payload,
        error: null,
      };

    case productType.GET_FILTER_PRODUCT_ERROR:
      return {
        isLoading: false,
        error: payload,
        totalProducts: 0,
      };

    default:
      return state;
  }
};

export default productsReducer;
