import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleRegister = () => {
    if (password !== cpassword) {
      alert("Passwords do not match");
    } else {
      const user = {
        username,
        email,
        password,
      };
      dispatch(register(user));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#e5e0ffa0]">
      <div className="flex justify-center items-center h-2/3 shadow-2xl">
        <div className="w-full md:w-2/5 h-full bg-[#f8f6fcc8] flex flex-col p-8 justify-between">
          <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            FoodTrip.
          </h1>
          <div className="w-full flex flex-col">
            <input
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-[#e5e0ff] bg-transparent py-2 my-2 focus:outline-none focus:border-[#c6bcfd] focus:ring-1 focus:ring-[#c6bcfd] cursor-pointer"
            />
            <input
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-[#e5e0ff] bg-transparent py-2 my-2focus:outline-none focus:border-[#c6bcfd] focus:ring-1 focus:ring-[#c6bcfd] cursor-pointer"
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-[#e5e0ff] bg-transparent py-2 my-2 focus:outline-none focus:border-[#c6bcfd] focus:ring-1 focus:ring-[#e5e0ff] cursor-pointer"
            />
            <input
              type="password"
              required
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              className="w-full border-[#e5e0ff] bg-transparent py-2 my-2 focus:outline-none focus:border-[#c6bcfd] focus:ring-1 focus:ring-[#e5e0ff] cursor-pointer"
            />
            <button
              onClick={handleRegister}
              className="my-3 border bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-xl tracking-wide"
            >
              Register
            </button>
            <div className="flex items-center justify-center relative py-2">
              <div className="w-1/2 h-[1px] bg-gray-300"></div>
              <p className="text-center text-xs text-gray-500 absolute bg-slate-100 px-1">
                OR
              </p>
            </div>
            <button className="flex items-center justify-center w-full bg-white text-[#de5246] rounded-lg p-1 my-3 border-[1px] border-[#de5246] ">
              <FcGoogle className="mr-2" />
              Sign Up with Google
            </button>
          </div>

          <p className="text-xs font-thin text-[#060606]">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-400 ml-1 underline underline-offset-2 italic"
            >
              Sign in.
            </Link>
          </p>
        </div>
        <div className="relative w-3/5 h-full hidden md:flex flex-col ">
          <img
            src="https://img.freepik.com/premium-vector/set-cartoon-fast-food-illustratio_530597-17.jpg?w=2000"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
