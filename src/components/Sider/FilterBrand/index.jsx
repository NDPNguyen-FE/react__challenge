import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./style.scss";

const data = [
  {
    type: "Insignia™(746)",
    checked: false,
  },
  {
    type: "Samsung(633)",
    checked: false,
  },
  {
    type: "Metra(591)",
    checked: false,
  },
  {
    type: "HP(530)",
    checked: false,
  },
  {
    type: "Apple(442)",
    checked: true,
  },
];

function FilterBrand(props) {
  const showType = (datas) => {
    return datas.map((data, index) => {
      return (
        <div className='filterBrand__checkbox' key={index}>
          <input type='checkbox' defaultChecked={data.checked} />
          {data.type}
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
      {showType(data)}
    </div>
  );
}

export default FilterBrand;
