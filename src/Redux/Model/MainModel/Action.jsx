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

export const MoveToSaftey = () => {
  return {
    type: MOVE_TO_SAFTEY,
  };
};

export const MoveToSafteyFail = () => {
  return {
    type: MOVE_TO_SAFTEY_FAIL,
  };
};
