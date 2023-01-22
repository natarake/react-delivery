import { MdAdd, MdRemove } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/apiCalls";

const Cart = () => {
  const dispatch = useDispatch();
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const subtotal = cartItems.reduce((amt, item) => amt + item.price, 0);

  return (
    <div>
      {/* wrapper below */}
      <div className="p-5 min-h-[90vh]">
        <h1 className="text-center text-4xl m-8 font-black">MY CART</h1>
        {/* bottom below */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          {/* info below */}
          <div className="flex-[4]">
            {/* product mapping below */}
            {cartItems.map((item) => (
              <div key={item._id}>
                <div className="flex justify-between mb-6">
                  {/* product detail below*/}
                  <div className="flex flex-col md:flex-row flex-[3] gap-8">
                    <div className="flex-[3]">
                      <img className="w-[300px]" src={item.image} alt="" />
                    </div>
                    <div className="flex flex-col justify-center gap-2 py-4 px-12 flex-[2]">
                      <div className="flex gap-2 flex-col">
                        <span className="font-bold">Product:</span>
                        <div>
                          {item.description} ({item.variant})
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold">Quantity:</span>
                        <span>{item.quantity}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold">Price:</span>
                        <span>₱ {item.prices[0][item.variant]}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold">Total:</span>
                        <span>₱ {item.price}</span>
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <div className="flex items-center">
                          <MdRemove
                            size="16"
                            color="red"
                            onClick={() =>
                              dispatch(
                                addToCart(item, item.quantity - 1, item.variant)
                              )
                            }
                          />
                          <div className="w-4 h-4 rounded-full bg-slate-200 border-[1px] border-solid border-slate-500 flex items-center justify-center m-2 text-xs">
                            {item.quantity}
                          </div>
                          <MdAdd
                            size="16"
                            color="green"
                            onClick={() =>
                              dispatch(
                                addToCart(item, item.quantity + 1, item.variant)
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(item));
                        }}
                        className="border bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-xl"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
            ))}
          </div>
          {/* SUMMARY here */}
          <div className="flex-[2] h-[50vh] border-[0.5px] border-solid border-gray-100 rounded-xl p-5 flex flex-col justify-around">
            <h1 className="font-extralight">Order Summary</h1>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span> ₱ {subtotal.toFixed(2)} </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span> ₱{(subtotal * 0.1).toFixed(2)}</span>
            </div>
            <div className="my-8 flex justify-between font-medium text-2xl">
              <span>Total</span>
              <span> ₱ {(subtotal * 1.1).toFixed(2)}</span>
            </div>

            <button className="w-full py-2 px-4 bg-[#060606] text-white font-semibold">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
