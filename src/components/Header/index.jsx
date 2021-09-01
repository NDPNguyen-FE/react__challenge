import React, { useRef, useState } from "react";
import Logo from "../../assets/logo.webp";
import "./style.scss";
import { SearchOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

Header.propTypes = {
  onSubmit: PropTypes.func,
};

Header.defaultProps = {
  onSubmit: null,
};

function Header(props) {
  const { onSubmit } = props;
  const [searchValue, setSearchValue] = useState("");
  const typingTimeout = useRef(null);

  const handleSearchTerm = (e) => {
    const value = e.target.value;

    setSearchValue(value);

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    if (!onSubmit) return;

    typingTimeout.current = setTimeout(() => {
      const formValues = {
        searchterm: value.toUpperCase(),
      };

      onSubmit(formValues);
    }, 800);
  };

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
            value={searchValue}
            placeholder='Search a product'
            onChange={handleSearchTerm}
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
