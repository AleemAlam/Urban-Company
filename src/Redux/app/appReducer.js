import { getData, saveData } from "../../utils/Storage";
import { ADD_TO_CART } from "./actionType";

const initState = {
  cart: getData("cart") || [],

  //[{},{},{}]
};

export const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      saveData("cart", [...state.cart, payload]);
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
    default:
      return state;
  }
};
