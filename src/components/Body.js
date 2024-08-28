import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData1, setResData1] = useState(resData);
  console.log(resData);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=11.2903199&lng=75.7746414"
      );
      let response = await data.json();

      setResData1(
        response?.data?.success?.cards[3]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (error) {
      setTimeout(() => {
        fetchData();
      }, 500);
    }
  };

  return resData1.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-filter-container">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const searchedData = resData1.filter((resData) =>
                resData.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setResData1(searchedData);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterData = resData.filter((cardData) => {
                return cardData.info.avgRating > 4;
              });
              setResData1(filterData);
              
            }}
          >
            Top rated restaurant
          </button>
        </div>
      </div>
      <div className="resto-container">
        {resData1.map((cardData) => {
          return (
            <RestaurantCard key={cardData?.info?.id} cardData={cardData} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
