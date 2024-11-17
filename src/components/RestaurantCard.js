import {IMG_URL} from "../utils/constants"

const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRating, cloudinaryImageId} = resData
    return (
     <div className="rest-cards">
         <img className="rest-logo" alt="food-img" src={IMG_URL+"/"+cloudinaryImageId}/>
         <h2>{name}</h2>
         <h4>{cuisines.join(",")}</h4>
         <h3>{avgRating}</h3>
     </div>
    )
 }

 export default RestaurantCard
 