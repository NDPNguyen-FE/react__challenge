import React from "react";
import "./style.scss";
import { StarOutlined, StarFilled } from "@ant-design/icons";

export const showStar = (rate) => {
  let star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      star.push(<StarFilled className='star' key={i} />);
    } else {
      star.push(<StarOutlined className='star' key={i} />);
    }
  }
  return star;
};

function FilterRate(props) {
  const showRate = () => {
    let results = [];
    for (let i = 4; i > 0; i--) {
      results.push(
        <div className='filterRate__star' key={i}>
          {showStar(i)}
          <span className='filterRate__text'> & Up 160000</span>
        </div>
      );
    }
    return results;
  };
  return (
    <div className='filterRate'>
      <h3>Ratings</h3>
      {showRate()}
    </div>
  );
}

export default FilterRate;
