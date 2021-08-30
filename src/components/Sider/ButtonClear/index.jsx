import { ClearOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../../redux/actions/filter.action";
import "./style.scss";

function ButtonClear(props) {
  const dispatch = useDispatch();

  const handleClickClear = () => {
    const input = document.querySelectorAll("input[type='checkbox']");
    input.forEach((item) => {
      item.checked = false;
    });

    dispatch(clearFilter());
  };

  return (
    <div className='buttonClear'>
      <Button onClick={() => handleClickClear()}>
        <ClearOutlined />
        Clear All filter
      </Button>
    </div>
  );
}

export default ButtonClear;
