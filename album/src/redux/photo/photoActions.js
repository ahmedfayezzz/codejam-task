import axios from "axios";

import {
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_FAILURE,
} from "./actionTypes";

const fetchPhotosRequest = () => {
  return {
    type: FETCH_PHOTO_REQUEST,
  };
};

const fetchPhotosSuccess = (photos) => {
  return {
    type: FETCH_PHOTO_SUCCESS,
    payload: photos,
  };
};

const fetchPhotosFailure = (error) => {
  return {
    type: FETCH_PHOTO_FAILURE,
    payload: error,
  };
};

export const fetchPhotos = () => {
  return (dispatch) => {
    dispatch(fetchPhotosRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const data = response.data;
        dispatch(fetchPhotosSuccess(data));
      })
      .catch((error) => {
        const errorMSG = error.message;
        dispatch(fetchPhotosFailure(errorMSG));
      });
  };
};
