import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const cartstate = useSelector((state) => state.cartReducer);

  return (
    <>
      <div className="bg-white sticky top-0 right-0 left-0 z-10">
        <div className="flex justify-between items-center h-14 mx-auto px-12 shadow-xl">
          <Link to="/">
            <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              FoodTrip.
            </h1>
          </Link>
          <ul className="hidden md:flex items-center">
            <Link to="cart">
              <li className="relative p-4">
                <FaShoppingCart size="20" className="text-gray-600" />
                <div className="inline-flex absolute top-2 left-7 justify-center items-center w-4 h-4 text-xs text-white bg-red-500 rounded-full border border-white">
                  {cartstate.cartItems.length}
                </div>
              </li>
            </Link>
            <Link to="/login">
              <li className="p-4 cursor-pointer text-gray-600 font-bold">
                Log In
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <ul
            className={
              nav
                ? "z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-white ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-4">
              FoodTrip.
            </h1>
            <li className="relative p-4 border-b border-t border-gray-300">
              <FaShoppingCart size="20" className="text-gray-600" />
              <div className="inline-flex top-2 left-7 absolute justify-center items-center w-4 h-4 text-xs text-white bg-red-500 rounded-full border border-white">
                {cartstate.cartItems.length}
              </div>
            </li>
            <li className="p-4 border-b border-gray-300 text-gray-600 font-bold">
              Login
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
