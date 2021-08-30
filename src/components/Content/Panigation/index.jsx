import React from "react";
import { Pagination } from "antd";
import "./style.scss";

function Panigation(props) {
  const { totalPage, handleChangePage } = props;
  return (
    <div className='panigation'>
      <Pagination
        total={totalPage}
        onChange={(e) => handleChangePage(e)}
        defaultPageSize={16}
        defaultCurrent={1}
        pageSizeOptions={[16]}
      />
    </div>
  );
}

export default Panigation;
