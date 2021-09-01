import React from "react";
import "./style.scss";

function FilterType(props) {
  const { allProducts, changeType } = props;

  const getType = (value) => {
    let valueType = [];

    valueType = value.reduce((obj, item) => {
      if (!obj[item.type]) {
        obj[item.type] = 0;
      }
      obj[item.type]++;
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

  let types = getType(allProducts);

  const showType = (datas) => {
    return datas.map((data, value) => {
      return (
        <div className='filterType__checkbox' key={value}>
          <input
            type='checkbox'
            value={data.key}
            onChange={(e) => changeType(e.target.value)}
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
