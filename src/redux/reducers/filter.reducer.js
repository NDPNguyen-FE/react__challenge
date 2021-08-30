import { filterAction } from "../actionType/filter.actionType";

const initialState = {
  _page: 1,
  _limit: 16,
  _sort: "",
  _order: "",
  type: [],
  brand: [],
  name_like: "",
};

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case filterAction.CHANGE_FILTER_BY_CATEGORY_LVL0:
      let newsState = { ...state };
      delete newsState["hierarchicalCategories.lvl1"];
      return {
        ...newsState,
        _page: 1,
        "hierarchicalCategories.lvl0": payload,
      };

    case filterAction.CHANGE_FILTER_BY_CATEGORY_LVL1:
      return {
        ...state,
        _page: 1,
        "hierarchicalCategories.lvl1": payload,
      };

    case filterAction.CHANGE_FILTER_BY_PAGE:
      return {
        ...state,
        _page: payload,
      };

    case filterAction.CHANGE_FILTER_BY_TYPE:
      const indexType = state.type.indexOf(payload);

      let newTypeState = [...state.type];

      if (indexType !== -1) {
        newTypeState.splice(indexType, 1);
      } else {
        newTypeState.push(payload);
      }

      return {
        ...state,
        _page: 1,
        type: newTypeState,
      };

    case filterAction.CHANGE_FILTER_BY_BRAND:
      const indexBrand = state.brand.indexOf(payload);

      let newBrandState = [...state.brand];

      if (indexBrand !== -1) {
        newBrandState.splice(indexBrand, 1);
      } else {
        newBrandState.push(payload);
      }

      return {
        ...state,
        _page: 1,
        brand: newBrandState,
      };

    case filterAction.CHANGE_FILTER_BY_RATINGS:
      return {
        ...state,
        _page: 1,
        rating: payload,
      };

    case filterAction.CHANGE_FILTER_BY_PRICES_RANGE:
      let newPriceState = { ...state };

      delete newPriceState.price_gte;
      delete newPriceState.price_lte;

      return {
        ...newPriceState,
        price_range: payload,
      };

    case filterAction.CHANGE_FILTER_BY_PRICES_FROM_TO:
      let newPriceFromToState = { ...state };

      delete newPriceFromToState.price_range;

      if (payload.priceFrom) {
        newPriceFromToState.price_gte = payload.priceFrom;
      }

      if (payload.priceTo) {
        newPriceFromToState.price_lte = payload.priceTo;
      }

      return {
        ...newPriceFromToState,
        _page: 1,
      };

    case filterAction.CHANGE_FILTER_BY_SORT:
      return {
        ...state,
        _sort: "price",
        _order: payload,
      };

    case filterAction.CHANGE_FILTER_BY_SEARCH:
      return {
        ...state,
        name_like: payload,
      };

    case filterAction.CHANGE_FILTER_CLEAR:
      return {
        ...state,
        _page: 1,
        _limit: 16,
        _sort: "",
        _order: [],
        type: [],
        brand: [],
        rating: [],
        price_range: [],
        "hierarchicalCategories.lvl0": [],
        "hierarchicalCategories.lvl1": [],
        name_like: "",
      };

    default:
      return state;
  }
};

export default filterReducer;
