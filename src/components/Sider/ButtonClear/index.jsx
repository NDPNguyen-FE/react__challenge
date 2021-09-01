import React from "react";
import "./style.scss";

import { Button } from "antd";
import { ClearOutlined } from "@ant-design/icons";

function ButtonClear(props) {
  const { clearFilters } = props;

  return (
    <div className='buttonClear'>
      <Button onClick={clearFilters}>
        <ClearOutlined />
        Clear All filter
      </Button>
    </div>
  );
}

export default ButtonClear;
