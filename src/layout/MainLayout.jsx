import React, { useEffect, useState } from "react";
import productsApi from "../api/productsApi";
import MainContent from "../components/Content";
import Header from "../components/Header";
import Sider from "../components/Sider";

function MainLayout() {
  return (
    <div className='mainLayout'>
      <Header />
      <Sider />
      <MainContent />
    </div>
  );
}

export default MainLayout;
