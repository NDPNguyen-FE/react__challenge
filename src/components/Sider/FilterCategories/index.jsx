import { RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByCategoryLvl0,
  getProductByCategoryLvl1,
} from "../../../redux/actions/filter.action";
import "./style.scss";

function FilterCategories(props) {
  const dispatch = useDispatch();
  const [activeLvl0, setActiveLvl0] = useState(null);
  const [activeLvl1, setActiveLvl1] = useState(null);

  const { allProducts } = useSelector((state) => state.products);

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

  const handleClickCategoriesLvl0 = (categoryName, event) => {
    setActiveLvl1(null);
    setActiveLvl0(categoryName);
    dispatch(getProductByCategoryLvl0(categoryName));
  };

  const handleClickCategoriesLvl1 = (categoryName, categoryLvl1, event) => {
    event.stopPropagation();
    setActiveLvl0(categoryName);
    setActiveLvl1(categoryLvl1);
    dispatch(getProductByCategoryLvl0(categoryName));
    dispatch(getProductByCategoryLvl1(`${categoryName} > ${categoryLvl1}`));
  };

  const showCategories = () => {
    let datas = getAllCategories();
    let dataView = Object.keys(datas)
      .sort()
      .splice(0, 10)
      .map((key, index) => {
        return (
          <div className={`filterCategories__list`} key={index}>
            <RightOutlined />
            <span
              className={`filterCategories__text  ${
                datas[key].name === activeLvl0 ? "active" : ""
              }`}
              onClick={(e) => handleClickCategoriesLvl0(datas[key].name, e)}>
              {datas[key].name}
            </span>

            {Object.keys(datas[key].children).length > 0 && (
              <div className={`filterCategories__item left-3`}>
                {Object.keys(datas[key].children)
                  .sort()
                  .splice(0, 10)
                  .map((child, index) => {
                    return (
                      <div
                        className={`left-2 filterCategories__text  ${
                          datas[key].children[child] === activeLvl1
                            ? "subActive"
                            : ""
                        }`}
                        key={index}
                        onClick={(e) =>
                          handleClickCategoriesLvl1(
                            datas[key].name,
                            datas[key].children[child],
                            e
                          )
                        }>
                        <RightOutlined />
                        <span>{datas[key].children[child]}</span>
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
