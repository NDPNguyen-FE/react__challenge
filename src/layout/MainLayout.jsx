import React, { useEffect, useState } from "react";
import productsApi from "../api/productsApi";
import MainContent from "../components/Content";
import Header from "../components/Header";
import Sider from "../components/Sider";
// import queryString from "query-string";

function MainLayout() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsPerPage, setProductsPerPage] = useState([]);
  const [checked, setChecked] = useState(false);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 16,
    type: [],
    brand: [],
  });

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const allProducts1 = await productsApi.getAllProducts();
        const products = await productsApi.getProducts(filters);
        setAllProducts(allProducts1);
        setProductsPerPage(products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
    //gọi khi unmount
    return () => {};
  }, [filters]);

  // lấy state mới nhất
  // useEffect(() => {
  //   console.log(productsPerPage);
  // }, [productsPerPage]);

  const handleChangePage = (page) => {
    setFilters({
      ...filters,
      _page: page,
    });
  };

  const handleChangeSort = (value) => {
    setFilters({
      ...filters,
      _sort: "price",
      _order: value,
    });
  };

  const handleSearch = (value) => {
    setFilters({
      ...filters,
      _page: 1,
      name_like: value.searchterm,
    });
  };

  const clearFilters = () => {
    setFilters({
      _page: 1,
      _limit: 16,
    });
  };

  const handleOnFilterChange = (newFilter) => {
    setFilters(newFilter);
  };

  return (
    <div className='mainLayout'>
      <Header onSubmit={handleSearch} />
      <Sider
        filters={filters}
        productList={allProducts}
        handleOnFilterChange={handleOnFilterChange}
        checked={checked}
      />
      <MainContent
        isLoading={loading}
        productList={allProducts}
        productPerPage={productsPerPage}
        handleChangePage={handleChangePage}
        handleChangeSort={handleChangeSort}
      />
    </div>
  );
}

export default MainLayout;
