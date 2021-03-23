import React, { useState, useContext, useEffect } from "react";
import { API_URL } from "../../contants";
import { useLocation, Link } from "react-router-dom";
import Categories from "../categories";
import shipping from "../../assets/ic_shipping.png";
import priceFormat from "../../utils/priceFormat";
import SearchContext from "../../context/SearchContext";
import Info from "../info";
import "./style.scss";

const useQueryParam = () => {
  return new URLSearchParams(useLocation().search);
};

const ItemList = () => {
  const queryParam = useQueryParam();
  const { searchValue, setSearchValue, setCategoryId } = useContext(SearchContext);
  const [items, setItems] = useState(null);

  useEffect(async () => {
    fetchData();


    setSearchValue(queryParam.get("search"));
  }, [searchValue]);

  const fetchData = async () => {
    await getItems(queryParam.get("search"))
  }
  
  const getItems = async (searchParam) => {
    const response = await fetch(`${API_URL}/items?q=${searchParam}`);
    const data = await response.json();

    setCategoryId(data.categories[0]);
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
      {itemsElement.length ? (
        <>
          <Categories />
          <ul className="items main-box">{itemsElement}</ul>{" "}
        </>
      ) : (
        <Info
          message={`No encontramos ningun producto con "${searchValue}", Intenta buscar con otra palabra.`}
          icon="error"
        />
      )}
    </React.Fragment>
  );
};

export default ItemList;
