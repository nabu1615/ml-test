import React, { useState, useContext, useEffect } from "react";
import { API_URL } from "../../contants";
import { useLocation, Link } from "react-router-dom";
import "./style.scss";
// import Categories from "../categories";
import shipping from "../../assets/ic_shipping.png";
import priceFormat from "../../utils/priceFormat";
import SearchContext from "../../context/SearchContext";

const useQueryParam = () => {
  return new URLSearchParams(useLocation().search);
};

const ItemList = () => {
  const queryParam = useQueryParam();
  const [items, setItems] = useState([]);
  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    (async function fetchData() {
      await getItems(queryParam.get("search"));
    })();
  }, [searchValue]);

  const getItems = async (searchValue) => {
    const response = await fetch(`${API_URL}/items?q=${searchValue}`);
    const data = await response.json();

    setItems(data.items);
  };

  const itemsElement = items
    ? items.slice(0, 4).map((item, index) => {
        return (
          <li className="item__list" key={index}>
            <Link className="item" to={`/item/${item.id}`}>
              <img
                className="item__image"
                src={item.picture}
                alt={item.title}
              />
              <div className="item__info">
                <div className="item__price-shipping">
                  <p className="item__price">
                    {priceFormat(item.price.amount)}
                    {item.free_shipping ? (
                      <img
                        className="item__shipping"
                        src={shipping}
                        alt="Envio Gratis"
                      />
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <h1 className="item__title"> {item.title} </h1>
              </div>
              <span className="item__city"> {item.city_name}</span>
            </Link>
          </li>
        );
      })
    : [];

  return (
    <React.Fragment>
      {/* <Categories categories={categoriesMock} /> */}
      <ul className="items">{itemsElement}</ul>
    </React.Fragment>
  );
};

export default ItemList;
