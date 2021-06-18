const initState = {
  cart: [],
  //[{},{},{}]
};

export const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    default:
      return state;
  }
};
