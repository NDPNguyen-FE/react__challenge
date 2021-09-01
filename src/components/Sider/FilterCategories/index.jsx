import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import "./style.scss";

function FilterCategories(props) {
  const { allProducts, changeCategoriesLvl0, changeCategoriesLvl1 } = props;

  const [activeCategorylvl0, setActiveCategorylvl0] = useState(null);
  const [activeCategorylvl1, setActiveCategorylvl1] = useState(null);

  const getAllCategories = () => {
    let allCategories = {};
    for (let category of allProducts) {
      if (!allCategories[category.hierarchicalCategories.lvl0]) {
        allCategories[category.hierarchicalCategories.lvl0] = {
          name: category.hierarchicalCategories.lvl0,
          children: {},
        };
      }
      if (!category.hierarchicalCategories.lvl1) continue;

      let categoryLvl1 = category.hierarchicalCategories.lvl1.split("> ")[1];

      allCategories[category.hierarchicalCategories.lvl0].children[
        categoryLvl1
      ] = categoryLvl1;
    }

    return allCategories;
  };

  const handleClickCategoriesLvl0 = (categoryLvl0Name, e) => {
    e.stopPropagation();
    setActiveCategorylvl1(null);
    setActiveCategorylvl0(categoryLvl0Name);
    changeCategoriesLvl0(categoryLvl0Name);
  };

  const handleClickCategoriesLvl1 = (categoryLvl0Name, categoryLvl1Name, e) => {
    e.stopPropagation();
    setActiveCategorylvl0(categoryLvl0Name);
    setActiveCategorylvl1(categoryLvl1Name);

    changeCategoriesLvl0(categoryLvl0Name);
    changeCategoriesLvl1(`${categoryLvl0Name} > ${categoryLvl1Name}`);
  };

  const showCategories = () => {
    let data = getAllCategories();
    let dataView = Object.keys(data)
      .sort()
      .splice(0, 10)
      .map((key, index) => {
        return (
          <div className={`filterCategories__list`} key={index}>
            <RightOutlined />
            <span
              className={`filterCategories__text  ${
                data[key].name === activeCategorylvl0 ? "active" : ""
              }`}
              onClick={(e) => handleClickCategoriesLvl0(data[key].name, e)}>
              {data[key].name}
            </span>

            {Object.keys(data[key].children).length > 0 && (
              <div className={`filterCategories__item left-3`}>
                {Object.keys(data[key].children)
                  .sort()
                  .splice(0, 10)
                  .map((child, index) => {
                    return (
                      <div
                        className={`left-2 filterCategories__text  ${
                          data[key].children[child] === activeCategorylvl1
                            ? "subActive"
                            : ""
                        }`}
                        key={index}
                        onClick={(e) =>
                          handleClickCategoriesLvl1(
                            data[key].name,
                            data[key].children[child],
                            e
                          )
                        }>
                        <RightOutlined />
                        <span>{data[key].children[child]}</span>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        );
      });

    return dataView;
  };
  return (
    <div className='filterCategories'>
      <h3>Show results for</h3>
      {showCategories()}
    </div>
  );
}

export default FilterCategories;
