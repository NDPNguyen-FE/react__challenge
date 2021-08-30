import React from "react";
import "./style.scss";

const data = [
  {
    type: "Trend cases(457)",
    checked: false,
  },
  {
    type: "Ult protection cases(393)",
    checked: false,
  },
  {
    type: "Ink cartridges(249)",
    checked: false,
  },
  {
    type: "Business cases(217)",
    checked: false,
  },
  {
    type: "Connectivity(181)",
    checked: true,
  },
];

function FilterType(props) {
  const showType = (datas) => {
    return datas.map((data, index) => {
      return (
        <div className="filterType__checknox" key={index}>
          <input type="checkbox" defaultChecked={data.checked} />
          {data.type}
        </div>
      );
    });
  };
  return (
    <div className="filterType">
      <h3>Type</h3>
      {showType(data)}
    </div>
  );
}

export default FilterType;
