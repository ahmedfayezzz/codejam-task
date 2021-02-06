import axios from "axios";

import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
} from "./actionTypes";

const fetchAlbumsRequest = () => {
  return {
    type: FETCH_ALBUM_REQUEST,
  };
};

const fetchAlbumsSuccess = (albums) => {
  return {
    type: FETCH_ALBUM_SUCCESS,
    payload: albums,
  };
};

const fetchAlbumsFailure = (error) => {
  return {
    type: FETCH_ALBUM_FAILURE,
    payload: error,
  };
};

export const fetchAlbums = () => {
  
  // console.log("in jehrhekjhan")
  return  (dispatch) => {
    dispatch(fetchAlbumsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        const data = response.data;
        dispatch(fetchAlbumsSuccess(data));
        // console.log(data)
      })
      .catch((error) => {
        const errorMSG = error.message;
        dispatch(fetchAlbumsFailure(errorMSG));
      });
  };
};