import React, { useEffect, useState } from "react";
import productsApi from "../../api/productsApi";
import ButtonClear from "./ButtonClear";
import FilterBrand from "./FilterBrand";
import FilterCategories from "./FilterCategories";
import FilterPrice from "./FilterPrice";
import FilterRate from "./FilterRate";
import FilterType from "./FilterType";
import "./style.scss";

function Sider(props) {
  return (
    <div className='sider'>
      <ButtonClear />
      <FilterCategories />
      <FilterType />
      <FilterBrand />
      <FilterRate />
      <FilterPrice />
    </div>
  );
}

export default Sider;
