import React, { useEffect, useState, useContext } from "react";
import { API_URL } from "../../contants";
import { useParams } from "react-router-dom";
import Categories from "../categories";
import priceFormat from "../../utils/priceFormat";
import Info from "../info";
import SearchContext from "../../context/SearchContext";
import "./style.scss";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { setCategoryId } = useContext(SearchContext);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`${API_URL}/items/${id}`);
      const data = await response.json();

      setItem(data.item);
      setCategoryId(data.item.category_id);
    })();
  }, []);

  return (
    <React.Fragment>
      {item ? <Categories/> : null}
      {item ? (
        <div className="detail main-box">
          <div className="detail__wrapper">
            <img
              className="detail__image"
              src={item.picture}
              alt={item.title}
            />
            <div className="detail__info">
              <p className="detail__sold">
                {item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {item.sold_quantity} Vendidos
              </p>
              <h1 className="detail__title">{item.title}</h1>
              <p className="detail__amount">{priceFormat(item.price.amount)}</p>
              <button aria-label="Comprar" className="button button--primary"> Comprar </button>
            </div>
          </div>
          <div className="detail__wrapper">
            <div>
              <p className="detail__description-title">
                Descripcion del producto
              </p>
              <p className="detail__description">{item.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <Info
          message={`No encontramos productos con "${id}", Intenta buscar el producto con otra palabra.`}
          icon="error"
        />
      )}
    </React.Fragment>
  );
};

export default Detail;
