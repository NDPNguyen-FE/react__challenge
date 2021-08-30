import React from "react";
import "./style.scss";

function Sort(props) {
  const { handleChangeSort, totalLoad } = props;

  return (
    <div className='sort'>
      <div className='sort__container'>
        <span className='sort__speed'>
          {totalLoad.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} results
          found in 3ms
        </span>
        <div className='sort__list'>
          <label htmlFor='price'>Sort by </label>
          <select id='price' onChange={(e) => handleChangeSort(e.target.value)}>
            <option value=''>Featured</option>
            <option value='asc'>Price asc</option>
            <option value='desc'>Price desc</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Sort;
