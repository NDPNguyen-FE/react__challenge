import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByPrice,
  getProductByPriceFromTo,
} from "../../../redux/actions/filter.action";
import "./style.scss";

function FilterPrice(props) {
  const dispatch = useDispatch();
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const { allProducts } = useSelector((state) => state.products);

  const getPrice = (allProducts) => {
    let valuePrice = [];

    for (let price of allProducts) {
      valuePrice.push(price["price_range"]);
    }

    valuePrice = valuePrice.filter(
      (price, index) => valuePrice.indexOf(price) === index
    );
    return valuePrice.sort();
  };

  const prices = getPrice(allProducts);

  const handleChangePriceRange = (valuePrice) => {
    dispatch(getProductByPrice(valuePrice));
  };

  const handleChangePriceFromTo = (e) => {
    e.preventDefault();
    dispatch(getProductByPriceFromTo(priceFrom, priceTo));
  };

  const showPrice = (datas) => {
    return datas.map((data, index) => {
      return (
        <div
          className='filterPrice__item'
          key={index}
          onClick={() => handleChangePriceRange(data)}>
          ${data}
        </div>
      );
    });
  };

  return (
    <div className='filterPrice'>
      <h3>Prices</h3>
      {showPrice(prices)}

      <form
        className='filterPrice__form'
        onSubmit={(e) => handleChangePriceFromTo(e)}>
        <div className='form__group'>
          <label>$</label>
          <input
            type='number'
            className='filterPrice__from'
            onChange={(e) => setPriceFrom(e.target.value)}
          />
        </div>
        <span>to</span>
        <div className='form__group'>
          <label>$</label>
          <input
            type='number'
            className='filterPrice__to'
            onChange={(e) => setPriceTo(e.target.value)}
          />
        </div>

        <button className='filterPrice__button' type='submit'>
          Go
        </button>
      </form>
    </div>
  );
}

export default FilterPrice;
