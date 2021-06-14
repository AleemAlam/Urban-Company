import { NEW_MODAL_FAIL, NEW_MODAL_REQ, NEW_MODAL_VIEW } from "./actionTypes";

export const newModalReq = () => {
  return {
    type: NEW_MODAL_REQ,
  };
};

export const newModalView = (payload) => {
  return {
    type: NEW_MODAL_VIEW,
    payload,
  };
};

export const newModalFail = (error) => {
  return {
    type: NEW_MODAL_FAIL,
    error,
  };
};

export const showModal = (payload) => (dispatch) => {
  dispatch(newModalReq());

  try {
    dispatch(newModalView(payload));
  } catch (error) {
    dispatch(newModalFail(error));
  }
};
