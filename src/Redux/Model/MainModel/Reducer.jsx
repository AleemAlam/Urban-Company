import {
  MOVE_TO_SAFTEY,
  MOVE_TO_SAFTEY_FAIL,
  MOVE_TO_SAFTEY_LOADING,
} from "./ActionType";

const init = {
  isLoading: false,
  isError: false,
  toSaftey: false,
};

export const Tosaftey = (state = init, { type, payload }) => {
  switch (type) {
    case MOVE_TO_SAFTEY_LOADING: {
      return {
        isLoading: true,
      };
    }

    case MOVE_TO_SAFTEY: {
      return {
        toSaftey: true,
        payload: true,
      };
    }

    case MOVE_TO_SAFTEY_FAIL: {
      return {
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
