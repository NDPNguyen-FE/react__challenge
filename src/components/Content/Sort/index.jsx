import React from "react";
import { useDispatch } from "react-redux";
import { getProductBySort } from "../../../redux/actions/filter.action";
import "./style.scss";

function Sort() {
  const dispatch = useDispatch();

  const handleChangePage = (e) => {
    const value = e.target.value;
    dispatch(getProductBySort(value));
  };

  return (
    <div className='sort'>
      <div className='sort__container'>
        <span className='sort__speed'>1000 results found in 3ms</span>
        <div className='sort__list'>
          <label htmlFor='price'>Sort by </label>
          <select id='price' onChange={(e) => handleChangePage(e)}>
            <option value='featured'>Featured</option>
            <option value='asc'>Price asc</option>
            <option value='desc'>Price desc</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Sort;
