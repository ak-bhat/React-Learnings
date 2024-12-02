import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
// console.log(data);

    // const [showItems, setShowItems] = useState(false)

    const handleClick = () =>{

        setShowIndex()

    //     setShowItems(!showItems)
    //Toggle feature with Same logic - showItems?setShowItems(false):setShowItems(true)
    // console.log(showItems);  Old Logic
    }
    

    return(
        <div>
            <div className="w-6/12 mx-auto my-5 bg-gray-100 shadow-lg p-4 text-lg ">
            <div className="flex justify-between font-bold cursor-pointer" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length}) </span>
                <span>{showItems?"🔼":"🔽"}</span>
            </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory