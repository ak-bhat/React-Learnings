import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
console.log(data);

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 text-lg font-bold">
            <div className="flex justify-between">
                <span>{data.title} ({data.itemCards.length}) </span>
                <span>🔽</span>
            </div>
                <ItemList items={data.itemCards}/>
            </div>
        </div>
    )
}

export default RestaurantCategory