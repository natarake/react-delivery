import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get(`http://localhost:8000/api/pizzas/`);
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
