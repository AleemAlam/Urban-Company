import { ADD_TO_CART } from "./actionType";

export const AddToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
