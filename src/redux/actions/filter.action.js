import { filterAction } from "../actionType/filter.actionType";

export const getProductByCategoryLvl0 = (categoryLvl0) => ({
  type: filterAction.CHANGE_FILTER_BY_CATEGORY_LVL0,
  payload: categoryLvl0,
});

export const getProductByCategoryLvl1 = (categoryLvl1) => ({
  type: filterAction.CHANGE_FILTER_BY_CATEGORY_LVL1,
  payload: categoryLvl1,
});

export const getProductByPage = (page) => ({
  type: filterAction.CHANGE_FILTER_BY_PAGE,
  payload: page,
});

export const getProductByType = (type) => ({
  type: filterAction.CHANGE_FILTER_BY_TYPE,
  payload: type,
});

export const getProductByBrand = (brand) => ({
  type: filterAction.CHANGE_FILTER_BY_BRAND,
  payload: brand,
});

export const getProductByRating = (rating) => ({
  type: filterAction.CHANGE_FILTER_BY_RATINGS,
  payload: rating,
});

export const getProductByPrice = (price) => ({
  type: filterAction.CHANGE_FILTER_BY_PRICES_RANGE,
  payload: price,
});

export const getProductByPriceFromTo = (priceFrom, priceTo) => ({
  type: filterAction.CHANGE_FILTER_BY_PRICES_FROM_TO,
  payload: {
    priceFrom,
    priceTo,
  },
});
export const getProductBySort = (sort) => ({
  type: filterAction.CHANGE_FILTER_BY_SORT,
  payload: sort,
});

export const getProductBySearch = (keys) => ({
  type: filterAction.CHANGE_FILTER_BY_SEARCH,
  payload: keys,
});

export const clearFilter = () => ({
  type: filterAction.CHANGE_FILTER_CLEAR,
});
