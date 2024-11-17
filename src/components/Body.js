import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"

const Body = () => {

    const [listRestaurants, setListRestaurants] = useState(resList)

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null")

        const data = await response.json()
        console.log(data.data.cards.slice(3, 16).map(card => card.card.card.info))
        setListRestaurants(data.data.cards.slice(3).map(card => card.card.card.info))
    }


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
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                )}      
            </div>
        </div>
    )
    

}

export default Body