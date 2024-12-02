import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const data = await response.json();
    console.log(
      data.data.cards.slice(3, 16).map((card) => card.card.card.info)
    );
    setListRestaurants(
      data.data.cards.slice(3, 16).map((card) => card.card.card.info)
    );
    setFilteredRestaurants(
      data.data.cards.slice(3, 16).map((card) => card.card.card.info)
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Please check your Network</h1>;

  const {loggedInUser, setUserName} = useContext(UserContext)

  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRes = listRestaurants.filter((resName) =>
                resName.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-2 p-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredData = listRestaurants.filter(
                (res) => res.avgRating > 4.5
              );
              setListRestaurants(filteredData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
            <input type="text" className="border border-solid border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
      </div>

      <div className="flex flex-wrap rounded-lg">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id}>
            {
                restaurant.promoted === true ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard key={restaurant.id} resData={restaurant} />

            }
          </Link> 
        ))} 
      </div>
    </div>
  );
};

export default Body;
