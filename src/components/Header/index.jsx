import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import Logo from "../../assets/logo.webp";
import "./style.scss";

const onChange = (e) => {
  console.log(e.target.value);
};

function Header(props) {
  return (
    <header className='header'>
      <div className='container header__container'>
        <div className='header__logo'>
          <a href='./'>
            <img src={Logo} alt='logo' />
            amazing
          </a>
        </div>

        <div className='header__search'>
          <input
            type='text'
            placeholder='Search a product'
            onChange={onChange}
          />
          <button>
            <SearchOutlined />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
