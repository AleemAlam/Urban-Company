import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from "./actionType";

export const userLogin = (otp, setModal) => (dispatch) => {
  dispatch(userLoginRequest());
  const code = otp;
  window.confirmationResult
    .confirm(code)
    .then((result) => {
      const user = result.user;
      console.log(user);
      dispatch(userLoginSuccess(user));
      setModal(false);
    })
    .catch((error) => {
      dispatch(userLoginFailure());
    });
};

const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};
const userLoginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: payload,
  };
};

const userLoginFailure = () => {
  console.log("enter error");

  return {
    type: USER_LOGIN_FAILURE,
  };
};

export const userLogout = (payload) => (dispatch) => {
  dispatch(userLogoutRequest());
  setTimeout(() => {
    dispatch(userLogoutSuccess());
  }, 500);
};

const userLogoutRequest = () => {
  return {
    type: USER_LOGOUT_REQUEST,
  };
};
const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};
