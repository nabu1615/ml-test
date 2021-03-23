import search from "../../assets/search.svg";
import error from "../../assets/notification-error.svg";
import "./style.scss";

const Info = ({ message, icon }) => {
  const iconSrc = icon === "error" ? error : search;

  return (
    <div className="info main-box">
      <img className="info__icon" src={iconSrc} alt={message} />
      <p className="info__title"> {message} </p>
    </div>
  );
};

export default Info;
