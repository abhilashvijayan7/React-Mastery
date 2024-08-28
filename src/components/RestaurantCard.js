import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { cardData } = props;
    const { name, cuisines, costForTwo, avgRating, sla } = cardData?.info;
  
    return (
      <div className="res-card" style={{
        backgroundColor: "#f0f0f0",
      }}>
        <img
          alt="food-image"
          className="food-img"
          src={
            CDN_URL +
            cardData?.info?.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h5>{"Rating:" + avgRating}</h5>
        <h5>{sla.slaString}</h5>
      </div>
    );
  };

  export default RestaurantCard ;