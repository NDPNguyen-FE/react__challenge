import React from "react";
import { Col } from "antd";
import "./style.scss";
import { showStar } from "../Sider/FilterRate";

function Cards(props) {
  const { cardItems } = props;
  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
      <div className='card'>
        <div className='card__img'>
          <img src={cardItems.image} alt={cardItems.url} />
        </div>
        <div className='card__body'>
          <div className='card__head'>
            <h3>{cardItems.name}</h3>
          </div>
          <div className='card__footer'>
            <div className='card__rate'>{showStar(cardItems.rating)}</div>

            <p className='card__price'>${cardItems.price}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}
export default Cards;
