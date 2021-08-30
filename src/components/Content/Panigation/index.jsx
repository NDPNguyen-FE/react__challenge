import { Pagination } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByPage } from "../../../redux/actions/filter.action";
import "./style.scss";

function Panigation() {
  const dispatch = useDispatch();

  const { _page, _limit } = useSelector((state) => state.filters);

  const { totalProducts } = useSelector((state) => state.products);

  const handleChangePage = (value) => {
    dispatch(getProductByPage(value));
  };

  return (
    <div className='panigation'>
      <Pagination
        total={totalProducts}
        onChange={(e) => handleChangePage(e)}
        defaultPageSize={_limit}
        defaultCurrent={_page}
        pageSizeOptions={[16]}
      />
    </div>
  );
}

export default Panigation;
