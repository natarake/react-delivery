import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./pizzaReducers";
import { cartReducer } from "./cartReducers";
import { loginReducer, registerReducer } from "./userReducers";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerReducer: registerReducer,
  loginReducer: loginReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: { cartItems: cartItems },
  loginReducer: { currentUser: currentUser },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
