import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from "./actionType";

const initState = {
  isAuth: false,
  user: {},
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
        user: {},
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isAuth: true,
        isError: false,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: {},
        isAuth: false,
        isError: true,
      };
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: {},
        isAuth: false,
        isError: false,
      };
    default:
      return state;
  }
};
