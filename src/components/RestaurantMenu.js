import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
    )

//   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card?.card?.["@type"]);

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold py-4 text-2xl">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category)=>
        <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>
      )}
    </div>
  );
};

export default RestaurantMenu;
