import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {

    const [listRestaurants, setListRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    

    const[searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null")

        const data = await response.json()
        console.log(data.data.cards.slice(3, 16).map(card => card.card.card.info))
        setListRestaurants(data.data.cards.slice(3,16).map(card => card.card.card.info))
        setFilteredRestaurants(data.data.cards.slice(3,16).map(card => card.card.card.info))
    }

    const onlineStatus = useOnlineStatus();


    if(onlineStatus===false)return (<h1>Please check your Network</h1>);


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="input" className="search-box" value={searchText} 
                    onChange={
                        (e)=>{setSearchText(e.target.value)}}>
                        </input>
                    <button className="btn-search" onClick={()=>{
                            const filteredRes = listRestaurants.filter(resName=>
                                resName.name.toLowerCase().includes(searchText.toLowerCase()))
                                setFilteredRestaurants(filteredRes)
                            
                        }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={ () =>{
                    const filteredData = listRestaurants.filter(res=> res.avgRating > 4.5);
                    setListRestaurants(filteredData);
                }}>Top Rated Restaurants</button>
            </div>
                
            <div className="res-container">
                {filteredRestaurants.map(restaurant =>
                    <Link to={"/restaurants/"+restaurant.id}><RestaurantCard key={restaurant.id} resData={restaurant}/></Link>
                )}      
            </div>
        </div>
    )
    

}

export default Body