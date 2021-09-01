import React, { useEffect, useState } from "react";

import ButtonClear from "./ButtonClear";
import FilterBrand from "./FilterBrand";
import FilterCategories from "./FilterCategories";
import FilterPrice from "./FilterPrice";
import FilterRate from "./FilterRate";
import FilterType from "./FilterType";
import "./style.scss";

function Sider(props) {
  const { productList, handleOnFilterChange } = props;

  const handleChangeType = (newTypeFilter) => {
    handleOnFilterChange((preState) => {
      const typeIndex = preState.type.indexOf(newTypeFilter);
      let newTypeFilters = [...preState.type];
      if (typeIndex !== -1) {
        newTypeFilters.splice(typeIndex, 1);
      } else {
        newTypeFilters.push(newTypeFilter);
      }
      return {
        ...preState,
        _page: 1,
        type: newTypeFilters,
      };
    });
  };

  const handleChangeBrand = (newBrandFilter) => {
    handleOnFilterChange((preState) => {
      const brandIndex = preState.brand.indexOf(newBrandFilter);
      let newBrandFilters = [...preState.brand];
      if (brandIndex !== -1) {
        newBrandFilters.splice(brandIndex, 1);
      } else {
        newBrandFilters.push(newBrandFilter);
      }

      return {
        ...preState,
        _page: 1,
        brand: newBrandFilters,
      };
    });
  };

  const handleChangeRating = (newRatingFilter) => {
    handleOnFilterChange((preState) => {
      return {
        ...preState,
        _page: 1,
        rating: newRatingFilter,
      };
    });
  };

  const handleChangePrice = (newPriceFilter) => {
    handleOnFilterChange((preState) => {
      // let newState = { ...preState };
      // delete newState.price_gte;
      // delete newState.price_lte;
      return {
        ...preState,
        _page: 1,
        price_range: newPriceFilter,
      };
    });
  };

  const handleChangePriceFromTo = (priceFrom, priceTo) => {
    handleOnFilterChange((preState) => {
      let newState = { ...preState };

      delete newState.price_range;

      if (priceFrom) {
        newState.price_gte = priceFrom;
      }

      if (priceTo) {
        newState.price_lte = priceTo;
      }

      return {
        ...newState,
        _page: 1,
        price_gte: priceFrom,
        price_lte: priceTo,
      };
    });
  };

  const handleChangeCategoryLvl0 = (newCategoriesLvl0) => {
    handleOnFilterChange((preState) => {
      delete preState["hierarchicalCategories.lvl1"];

      return {
        ...preState,
        _page: 1,
        "hierarchicalCategories.lvl0": newCategoriesLvl0,
      };
    });
  };

  const handleChangeCategoryLvl1 = (newCategoriesLvl1) => {
    handleOnFilterChange((preState) => {
      return {
        ...preState,
        _page: 1,
        "hierarchicalCategories.lvl1": newCategoriesLvl1,
      };
    });
  };

  const clearFilters = () => {
    handleOnFilterChange((preState) => {
      const checkboxFilter = document.querySelectorAll(
        "input[type='checkbox']"
      );

      checkboxFilter.forEach((checkboxFilter) => {
        checkboxFilter.checked = false;
      });

      return {
        ...preState,
        _page: 1,
        _limit: 16,
        _sort: "",
        type: [],
        brand: [],
        rating: [],
        price_range: [],
        "hierarchicalCategories.lvl0": [],
        "hierarchicalCategories.lvl1": [],
      };
    });
  };

  return (
    <div className='sider'>
      <ButtonClear clearFilters={clearFilters} />
      <FilterCategories
        allProducts={productList}
        changeCategoriesLvl0={handleChangeCategoryLvl0}
        changeCategoriesLvl1={handleChangeCategoryLvl1}
      />
      <FilterType allProducts={productList} changeType={handleChangeType} />
      <FilterBrand allProducts={productList} changeBrand={handleChangeBrand} />
      <FilterRate allProducts={productList} changeRate={handleChangeRating} />
      <FilterPrice
        allProducts={productList}
        changePrice={handleChangePrice}
        handleChangePriceFromTo={handleChangePriceFromTo}
      />
    </div>
  );
}

export default Sider;
