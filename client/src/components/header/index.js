import React, { useState, useContext } from "react";
import logo from "../../assets/Logo_ML.png";
import { Link, BrowserRouter, useHistory } from "react-router-dom";
import SearchContext from "../../context/SearchContext";
import "./style.scss";

const Header = () => {
  const [searchField, setSearchField] = useState("");
  const { setSearchValue } = useContext(SearchContext);
  const history = useHistory();

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    setSearchValue(searchField);
    history.push(`/items?search=${searchField}`);
  };

  const redirectHome = (event) => {
    event.preventDefault();
    history.push(`/`);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <BrowserRouter>
            <Link to="/" onClick={redirectHome}>
              <img
                src={logo}
                alt="Mercado Libre Colombia - Donde comprar y vender de todo"
              />
            </Link>
          </BrowserRouter>
          <form className="search" onSubmit={searchHandler}>
            <input
              type="text"
              id="search-item"
              placeholder="Nunca dejes de buscar"
              className="search__input"
              value={searchField}
              onChange={handleChange}
            />
            <button type="submit" className="search__button"></button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
