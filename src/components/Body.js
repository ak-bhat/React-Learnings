import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () => {

    const [listRestaurants, setListRestaurants] = useState(resList)
    return (
        <div className="body">
            <div className="fiter">
                <button className="filter-btn" 
                onClick={ () =>{
                    const filteredData = listRestaurants.filter(res=> res.stars>4);
                    setListRestaurants(filteredData);
                }}>Top Rated Restaurants</button>
            </div>
                
            <div className="res-container">
                {listRestaurants.map(restaurant =>
                    <RestaurantCard resData={restaurant}/>
                )}      
            </div>
        </div>
    )
    

}

export default Body