import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByBrand } from "../../../redux/actions/filter.action";
import "./style.scss";

function FilterBrand(props) {
  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.products);

  const getBrand = (allProducts) => {
    let valueBrand = [];

    valueBrand = allProducts.reduce((obj, product) => {
      if (!obj[product.brand]) {
        obj[product.brand] = 0;
      }

      obj[product.brand]++;

      return obj;
    }, {});

    let listBrand = { ...valueBrand };
    listBrand = Object.entries(listBrand)
      .sort((a, b) => b[1] - a[1])
      .splice(0, 5)
      .map(([key, value]) => {
        return { key: key, value: value, checked: false };
      });

    return listBrand;
  };

  const brands = getBrand(allProducts);

  const handleChangeBrand = (e) => {
    const value = e.target.value;
    dispatch(getProductByBrand(value));
  };

  const showType = (datas) => {
    return datas.map((data, index) => {
      return (
        <div className='filterBrand__checkbox' key={index}>
          <input
            type='checkbox'
            defaultChecked={data.checked}
            value={data.key}
            onChange={(e) => handleChangeBrand(e)}
          />
          {data.key}({data.value})
        </div>
      );
    });
  };

  return (
    <div className='filterBrand'>
      <h3>Brand</h3>
      <div className='filterBrand__search'>
        <input type='text' placeholder='Search for other... ' />
        <button>
          <SearchOutlined />
        </button>
      </div>
      {showType(brands)}
    </div>
  );
}

export default FilterBrand;
