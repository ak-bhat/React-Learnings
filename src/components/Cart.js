import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleitem = (index) => {
    dispatch(removeItem(index));
    console.log(index);
  };

  const removeCart = () => {
    dispatch(clearCart());
  };

  return items.length === 0 ? (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart is Empty</h1>
    </div>
  ) : (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={items} />
      </div>
      <div className="items-center p-4">
        <button
          className="p-2 mx-9 text-white rounded-lg bg-red-700 shadow-lg "
          onClick={removeCart}
        >
          Clear Cart
        </button>
        <button className="p-2 mx-9 text-white rounded-lg bg-green-700 shadow-lg ml-auto">
          Order
        </button>
      </div>
    </div>
  );
  //   return items.length !== 0 ? (
  //     <div>

  //       <button
  //                 className="p-2 mx-9 text-red-500 rounded-lg bg-white shadow-lg"
  //                 onClick={() => handleitem(index)}
  //               >
  //                 Remove
  //               </button>
  //     </div>

  //   ) : (
  //     <div>
  //       <h1>Cart is Empty</h1>
  //     </div>
  //   );
};

export default Cart;
