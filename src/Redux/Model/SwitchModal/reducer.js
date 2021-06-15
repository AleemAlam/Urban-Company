import { NEW_MODAL_FAIL, NEW_MODAL_REQ, NEW_MODAL_VIEW } from "./actionTypes";

const initial = {
  isLoading: false,
  isError: false,
  toModal: false,
  toSafety: false,
};

export const moveModal = (state = initial, action) => {
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case NEW_MODAL_REQ: {
      return {
        ...state,
        isLoading: true,
        [payload]: !state.payload,
      };
    }

    case NEW_MODAL_VIEW: {
      return {
        ...state,
        toModal: true,
        [payload]: true,
      };
    }

    case NEW_MODAL_FAIL: {
      return {
        ...state,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
