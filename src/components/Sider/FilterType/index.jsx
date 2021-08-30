import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByType } from "../../../redux/actions/filter.action";
import "./style.scss";

function FilterType(props) {
  const dispatch = useDispatch();

  const { filter } = useSelector((state) => state.filters);

  const { allProducts } = useSelector((state) => state.products);

  const getType = (allProducts) => {
    let valueType = [];

    valueType = allProducts.reduce((obj, product) => {
      if (!obj[product.type]) {
        obj[product.type] = 0;
      }
      obj[product.type]++;

      return obj;
    }, {});

    let listType = { ...valueType };
    listType = Object.entries(listType)
      .sort((a, b) => b[1] - a[1])
      .splice(0, 5)
      .map(([key, value]) => {
        return { key: key, value: value, checked: false };
      });

    return listType;
  };

  const types = getType(allProducts);

  const handleChangeType = (e) => {
    console.log(e.target.value);
    dispatch(getProductByType(e.target.value));
  };

  const showType = (datas) => {
    return datas.map((data, index) => {
      return (
        <div className='filterType__checknox' key={index}>
          <input
            type='checkbox'
            defaultChecked={data.checked}
            value={data.key}
            onChange={(e) => handleChangeType(e)}
          />
          {data.key} ({data.value})
        </div>
      );
    });
  };
  return (
    <div className='filterType'>
      <h3>Type</h3>
      {showType(types)}
    </div>
  );
}

export default FilterType;
