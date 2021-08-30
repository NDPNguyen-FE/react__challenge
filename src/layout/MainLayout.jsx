import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "../components/Content";
import Header from "../components/Header";
import Sider from "../components/Sider";
import {
  getAllProducts,
  getFilterProducts,
} from "../redux/thunk/products.thunk";

function MainLayout() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFilterProducts(filter));
  }, [filter]);

  return (
    <div className='mainLayout'>
      <Header />
      <Sider />
      <MainContent />
    </div>
  );
}

export default MainLayout;
