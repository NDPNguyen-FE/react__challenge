import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./style.scss";

function FilterBrand(props) {
  const { allProducts, changeBrand } = props;
  const [searchBrand, setSearchBrand] = useState("");

  const getBrand = (allProducts) => {
    let valueBrand = [];

    valueBrand = allProducts.reduce((obj, brand) => {
      if (!obj[brand.brand]) {
        obj[brand.brand] = 0;
      }

      obj[brand.brand]++;
      return obj;
    }, {});

    let listBrands = { ...valueBrand };
    listBrands = Object.entries(listBrands)
      .sort((a, b) => b[1] - a[1])
      .splice(0, 5)
      .map(([key, value]) => {
        return { key: key, value: value, checked: false };
      });

    return listBrands;
  };

  let brands = getBrand(allProducts);

  const handleSearchBrand = (value) => {
    setSearchBrand(value);
  };

  const showType = (datas) => {
    return datas.map((data, value) => {
      return (
        <div className='filterBrand__checkbox' key={value}>
          <input
            type='checkbox'
            defaultChecked={data.checked}
            value={data.key}
            onChange={(e) => changeBrand(e.target.value)}
          />
          {data.key} ({data.value})
        </div>
      );
    });
  };

  return (
    <div className='filterBrand'>
      <h3>Brand</h3>
      <div className='filterBrand__search'>
        <input
          type='text'
          placeholder='Search for other... '
          onChange={(e) => handleSearchBrand(e.target.value)}
        />
        <button>
          <SearchOutlined />
        </button>
      </div>
      {showType(brands)}
    </div>
  );
}

export default FilterBrand;
