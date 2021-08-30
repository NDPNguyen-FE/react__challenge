import { Row, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/thunk/products.thunk";
import Cards from "../Card/index";
import Panigation from "./Panigation";
import Sort from "./Sort";
import "./style.scss";

function MainContent(props) {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.products);

  const { filterProduct } = useSelector((state) => state.products);

  return (
    <section className='mainContent'>
      <Sort />
      {isLoading ? (
        <Spin />
      ) : (
        <Row gutter={[16, 16]}>
          {filterProduct.length <= 0 ? <h2>Products Not Found</h2> : <Cards />}
        </Row>
      )}
      <Row gutter={[16, 16]}>
        <Cards />
      </Row>
      <Panigation />
    </section>
  );
}

export default MainContent;
