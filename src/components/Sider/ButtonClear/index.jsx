import React from "react";
import "./style.scss";

import { Button } from "antd";
import { ClearOutlined } from "@ant-design/icons";

function ButtonClear(props) {
  return (
    <div className='buttonClear'>
      <Button>
        <ClearOutlined />
        Clear All filter
      </Button>
    </div>
  );
}

export default ButtonClear;
