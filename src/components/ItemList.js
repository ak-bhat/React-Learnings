const ItemList = ({items}) => { 
    return (
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-b-1 border-gray-200 text-left">
                    <div>
                        <span>{item.card.info.name}</span>
                        <span>{item.card.info.price}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ItemList