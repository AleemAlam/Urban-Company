import axios from "axios";
import {
  SERVICE_FAILURE,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
} from "./actionTypes";

export const serviceRequest = () => {
  return {
    type: SERVICE_REQUEST,
  };
};

export const serviceSuccess = (payload) => {
  return {
    type: SERVICE_SUCCESS,
    payload,
  };
};

export const serviceFailure = (error) => {
  return {
    type: SERVICE_FAILURE,
    error,
  };
};

export const servicesData = (payload) => async (dispatch) => {
  dispatch(serviceRequest());

  try {
    const { data } = await axios.get(
      `https://fake-api-project-for-masai.herokuapp.com/services`
    );
    dispatch(serviceSuccess(data));
  } catch (error) {
    dispatch(serviceFailure(error));
  }
};
