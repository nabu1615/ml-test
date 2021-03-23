import React, { useState, useEffect, useContext } from "react";
import { API_URL } from "../../contants";
import SearchContext from "../../context/SearchContext";
import "./style.scss";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const { categoryId } = useContext(SearchContext);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`${API_URL}/categories/${categoryId}`);
      const data = await response.json();

      setCategories(data.categories);
    })();
  }, [categoryId]);

  const categoriesList = categories
    ? categories.map((category, index) => {
        return (
          <li className="categories__item" key={index}>
            {category}
          </li>
        );
      })
    : [];

  return <ul className="categories">{categoriesList}</ul>;
};

export default Categories;
