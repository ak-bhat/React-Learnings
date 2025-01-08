import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);  // Subscribe to the store

  const dispatch = useDispatch();

  const handleitem = (index) => {
    dispatch(removeItem(index));
    console.log(index);
  };

  const removeCart = () =>{
    dispatch(clearCart());
  }

  return items.length !== 0 ? (
    <div>
      <div>
        {items.map((item, index) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
              </div>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs py-2">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 ">
              <button
                className="p-2 mx-9 text-red-500 rounded-lg bg-white shadow-lg"
                onClick={() => handleitem(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center p-4">
        <button className="p-2 mx-9 text-white rounded-lg bg-red-700 shadow-lg "
        onClick={removeCart}>
          Clear Cart
        </button>
        <button className="p-2 mx-9 text-white rounded-lg bg-green-700 shadow-lg ml-auto">
          Order
        </button>
      </div>
    </div>
  ) : (
    <div>
      <h1>Cart is Empty</h1>
    </div>
  );
};

export default Cart;
