import React from "react";

const data = [
  { name: "<=1", value: "<= 1" },
  { name: "$1 - 80", value: "1-80" },
  { name: "$80 - 160", value: "80-160" },
  { name: "$160 - 240", value: "160-240" },
  { name: "$240 - 1,820", value: "240-1820" },
  { name: "$1,820 - 1,820", value: "1820 - 3400" },
  { name: "$3,4000 - 4,980", value: "3400 - 4980" },
  { name: ">= $4,980", value: " >= $4980" },
];

function FilterPrice(props) {
  const showPrice = (datas) => {
    return datas.map((data, index) => {
      return (
        <div className='filterPrice__item' key={index}>
          {data.name}
        </div>
      );
    });
  };

  return (
    <div className='filterPrice'>
      <h3>Prices</h3>
      {showPrice(data)}
    </div>
  );
}

export default FilterPrice;
