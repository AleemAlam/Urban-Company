import {
  MOVE_TO_SAFTEY_LOADING,
  MOVE_TO_SAFTEY,
  MOVE_TO_SAFTEY_FAIL,
} from "./ActionType";

export const MoveToSafteyLoading = () => {
  return {
    type: MOVE_TO_SAFTEY_LOADING,
  };
};

export const MoveToSaftey = (payload) => {
  return {
    type: MOVE_TO_SAFTEY,
    payload,
  };
};

export const MoveToSafteyFail = () => {
  return {
    type: MOVE_TO_SAFTEY_FAIL,
  };
};

export const showSaftey = (paylaod) => (dispatch) => {
  dispatch(MoveToSafteyLoading());
  try {
    dispatch(MoveToSaftey(paylaod));
    
  } catch (erorr) {
    dispatch(MoveToSafteyFail(erorr));
  }
};
