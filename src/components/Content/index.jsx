import React, { useEffect, useState } from "react";
import { Row, Spin } from "antd";
import "./style.scss";
import Cards from "../Card/index";
import Sort from "./Sort";
import Panigation from "./Panigation";
import productsApi from "../../api/productsApi.js";

function MainContent(props) {
  return (
    <section className='mainContent'>
      <Sort />
      <Row gutter={[16, 16]}></Row>
      <Panigation />
    </section>
  );
}

export default MainContent;
