import {IMG_URL} from "../utils/constants"

const RestaurantCard = ({resData}) => {
    console.log(resData);
    
    const {name, cuisines, avgRating, cloudinaryImageId} = resData
    return (
     <div className="m-4 p-4 w-[250px] bg-red-300 hover:bg-red-600" data-testid="resCards">
         <img className="rounded-lg" alt="food-img" src={IMG_URL+"/"+cloudinaryImageId}/>
         <h2 className="font-bold py-4 text-lg">{name}</h2>
         <h4>{cuisines.join(",")}</h4>
         <h3>{avgRating}</h3>
     </div>
    )
 }

export const withPromotedLabel = (RestaurantCard) => {
    return (props)=>{
        return (
            <div>
                <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
 }

 export default RestaurantCard
 