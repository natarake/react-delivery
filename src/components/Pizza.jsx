import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/apiCalls";

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("Small");

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(pizza, quantity, variant));
  };

  return (
    <div className="p-4 shadow-2xl m-5">
      <h1>{pizza.description}</h1>
      <img src={pizza.image} alt="" className="w-[10em] h-[10em]" />
      <div className="flex items-center justify-between my-4">
        <div>
          <p>Variants:</p>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            className="focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 cursor-pointer"
          >
            {pizza.variants.map((variant, index) => (
              <option value={variant} key={index}>
                {variant}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Quantity:</p>
          <select
            className="focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 cursor-pointer"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((quantity, index) => {
              return (
                <option value={quantity + 1} key={index}>
                  {quantity + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1>Price: {pizza.prices[0][variant] * quantity}</h1>
        </div>
        <div>
          <button
            onClick={handleAddToCart}
            className="border bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-xl tracking-wide"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
