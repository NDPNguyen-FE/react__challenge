import React from "react";
import { RightOutlined } from "@ant-design/icons";
import "./style.scss";

const data = [
  {
    name: "Appliances",
    level: 0,
    isActive: true,
    children: [
      {
        name: "Dishwashers",
        level: 1,
      },
      {
        name: "item 1",
        level: 1,
      },
      {
        name: "item 2",
        level: 1,
      },
    ],
  },
  {
    name: "Appliances 2",
    level: 0,
    children: [
      {
        name: "Dishwashers",
        level: 1,
      },
      {
        name: "item 3",
        level: 1,
      },
      {
        name: "item 4",
        level: 1,
      },
    ],
  },
  {
    name: "Appliances 5",
    level: 0,
    children: [
      {
        name: "Dishwashers",
        level: 1,
      },
      {
        name: "item 6",
        level: 1,
      },
      {
        name: "item 7",
        level: 1,
      },
    ],
  },
  {
    name: "Appliances 2",
    level: 0,
    children: [
      {
        name: "Dishwashers",
        level: 1,
      },
      {
        name: "item 3",
        level: 1,
      },
      {
        name: "item 4",
        level: 1,
      },
    ],
  },
  {
    name: "Appliances 2",
    level: 0,
    children: [
      {
        name: "Dishwashers",
        level: 1,
      },
      {
        name: "item 3",
        level: 1,
      },
      {
        name: "item 4",
        level: 1,
      },
    ],
  },
];

const handleClickCategories = (data) => {
  console.log(data);
};

function FilterCategories(props) {
  const showCategories = (data, margin) => {
    return data.map((dataItem, index) => {
      return (
        <div className={`filterCategories__list left-${margin}`} key={index}>
          <RightOutlined />
          <span
            className={`filterCategories__text  ${
              dataItem.isActive ? "active" : ""
            }`}
            onClick={() => handleClickCategories(dataItem)}
          >
            {dataItem.name}
          </span>
          {dataItem.children && showCategories(dataItem.children, 2)}
        </div>
      );
    });
  };
  return (
    <div className="filterCategories">
      <h3>Show results for</h3>
      {showCategories(data, 0)}
    </div>
  );
}

export default FilterCategories;
