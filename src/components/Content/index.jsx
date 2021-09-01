import React from "react";
import { Row, Spin } from "antd";
import "./style.scss";
import Cards from "../Card/index";
import Sort from "./Sort";
import Panigation from "./Panigation";

const showProduct = (datas) => {
  return datas.map((product, index) => {
    return <Cards cardItems={product} key={index}></Cards>;
  });
};

function MainContent(props) {
  const {
    productList,
    productPerPage,
    handleChangePage,
    handleChangeSort,
    isLoading,
  } = props;

  return (
    <section className='mainContent'>
      <Sort
        handleChangeSort={handleChangeSort}
        totalLoad={productList.length}
      />

      <Row gutter={[16, 16]}>
        {isLoading ? <Spin /> : showProduct(productPerPage)}
      </Row>
      <Panigation
        totalPage={productList.length}
        handleChangePage={handleChangePage}
      />
    </section>
  );
}

export default MainContent;
