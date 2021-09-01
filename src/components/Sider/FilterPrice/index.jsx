import React, { useState } from "react";
import "./style.scss";

function FilterPrice(props) {
  const { allProducts, changePrice, handleChangePriceFromTo } = props;

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangePriceFromTo(priceFrom, priceTo);
  };

  const getPrice = (allProducts) => {
    let priceData = [];

    for (let price of allProducts) {
      priceData.push(price["price_range"]);
    }

    priceData = priceData.filter(
      (price, index) => priceData.indexOf(price) === index
    );

    return priceData.sort();
  };

  const price = getPrice(allProducts);

  const showPrice = (datas) => {
    return datas.map((data, index) => {
      return (
        <div
          className='filterPrice__item'
          key={index}
          onClick={() => changePrice(data)}>
          ${data}
        </div>
      );
    });
  };

  return (
    <div className='filterPrice'>
      <h3>Prices</h3>
      {showPrice(price)}

      <form className='filterPrice__form' onSubmit={(e) => handleSubmit(e)}>
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
