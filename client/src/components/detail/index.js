import React, { useEffect, useState } from "react";
import { API_URL } from '../../contants';
import { useParams } from "react-router-dom";
import "./style.scss";
// import Categories from "../categories";
import priceFormat from "../../utils/priceFormat";

const Detail = () => {
  const { id } =  useParams();
  const [item, setItem] = useState(null);
  let condition = '';
  
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch(`${API_URL}/items/${id}`);

    const data = await response.json();

    setItem(data.item);
  }
  
  condition = item.condition === "new" ? "Nuevo" : "Usado";
  
  return (
    <React.Fragment>
      {/* <Categories categories={categoriesMock} /> */}
      {
        item ?  <div className="detail">
        <div className="detail__wrapper">
          <img className="detail__image" src={item.picture} alt={item.title} />
          <div className="detail__info">
            <p className="detail__sold">
              {condition} - {item.sold_quantity} Vendidos
            </p>
            <h1 className="detail__title">{item.title}</h1>
            <p className="detail__amount">{priceFormat(item.price.amount)}</p>
            <button className="button button--primary"> Comprar </button>
          </div>
        </div>
        <div className="detail__wrapper">
            <div>
                <p className="detail__description-title">
                    Descripcion del producto    
                </p>
                <p className="detail__description">
                    { item.description } 
                </p>
            </div>
        </div>
      </div>
      : <React.Fragment/>
      }
    </React.Fragment>
  );
};

export default Detail;
