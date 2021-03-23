import "./style.scss";
import search from '../../assets/search.svg' 

const Info = ({ message, icon }) => {
  return (
    <div className="info">
        <img className="info__icon" src={search} alt={message} />
        <p className="info__title"> {message} </p>
    </div>
  )
};

export default Info;
