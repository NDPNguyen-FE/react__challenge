import { Col } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { showStar } from "../Sider/FilterRate";
import "./style.scss";

function Cards(props) {
  const { filterProduct } = useSelector((state) => state.products);

  return filterProduct.map((product, index) => {
    return (
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 8 }}
        xl={{ span: 6 }}
        key={index}>
        <div className='card'>
          <div className='card__img'>
            <img src={product.image} alt={product.url} />
          </div>
          <div className='card__body'>
            <div className='card__head'>
              <h3>{product.name}</h3>
            </div>
            <div className='card__footer'>
              <div className='card__rate'>{showStar(product.rating)}</div>

              <p className='card__price'>${product.price}</p>
            </div>
          </div>
        </div>
      </Col>
    );
  });
}
export default Cards;
