import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="bg-[#060606ef] sticky top-0 right-0 left-0 z-10">
        <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-white shadow-xl ">
          <h1 className="text-2xl text-blue-700 font-semibold font-display">
            <span className="text-red-500">e</span>Pasa
            <span className="text-red-500">Buy</span>Mo
          </h1>
          <ul className="hidden md:flex items-center">
            <li className="relative p-4">
              <FaShoppingCart size="20" />
              <div className="inline-flex absolute top-2 left-7 justify-center items-center w-4 h-4 text-xs text-white bg-red-500 rounded-full border border-white">
                1
              </div>
            </li>
            <li className="p-4 cursor-pointer">Log In</li>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <ul
            className={
              nav
                ? "z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#060606f9] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <h1 className="text-2xl text-blue-700  font-semibold font-display m-4">
              <span className="text-red-500">e</span>Pasa
              <span className="text-red-500">Buy</span>Mo
            </h1>
            <li className="relative p-4 border-b border-gray-600">
              <FaShoppingCart size="20" />
              <div className="inline-flex top-2 left-7 absolute justify-center items-center w-4 h-4 text-xs text-white bg-red-500 rounded-full border border-white">
                1
              </div>
            </li>
            <li className="p-4 border-b border-gray-600">Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
