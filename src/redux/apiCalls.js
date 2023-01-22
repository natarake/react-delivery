import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get(`http://localhost:8000/api/pizzas`);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data });
    console.log(res.data);
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: err });
  }
};

export const addToCart =
  (pizza, quantity, variant) => async (dispatch, getState) => {
    const cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      variant: variant,
      quantity: Number(quantity),
      description: pizza.description, //tentative here
      prices: pizza.prices,
      price: pizza.prices[0][variant] * quantity,
    };

    if (cartItem.quantity < 1) {
      dispatch({ type: "REMOVE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const removeFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: pizza });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const register = (user) => async (dispatch) => {
  dispatch({ type: "REGISTER_USER_REQUEST" });
  try {
    const res = await axios.post(
      `http://localhost:8000/api/users/register/`,
      user
    );
    console.log(res.data);
    dispatch({ type: "REGISTER_USER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "REGISTER_USER_FAILED", payload: error });
  }
};

export const login = (user) => async (dispatch) => {
  dispatch({ type: "LOGIN_USER_REQUEST" });
  try {
    const res = await axios.post(
      `http://localhost:8000/api/users/login/`,
      user
    );
    console.log(res.data);
    dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
  } catch (error) {
    dispatch({ type: "LOGIN_USER_FAILED", payload: error });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};
