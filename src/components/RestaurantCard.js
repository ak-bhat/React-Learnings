const RestaurantCard = ({resData}) => {
    const {resName, cuisine, stars, img} = resData
    return (
     <div className="rest-cards">
         <img className="rest-logo" alt="food-img" src={img}/>
         <h2>{resName}</h2>
         <h4>{cuisine}</h4>
         <h3>{stars}</h3>
     </div>
    )
 }

 export default RestaurantCard
 