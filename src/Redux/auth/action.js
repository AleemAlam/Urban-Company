import {
  SEND_OTP_FAILURE,
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
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

export const otpRequest = () => {
  return {
    type: SEND_OTP_REQUEST,
  };
};
export const otpSuccess = (payload) => {
  return {
    type: SEND_OTP_SUCCESS,
  };
};

export const otpFailure = () => {
  return {
    type: SEND_OTP_FAILURE,
  };
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
