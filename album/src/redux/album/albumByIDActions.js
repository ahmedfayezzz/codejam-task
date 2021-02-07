import axios from "axios";

import {
  FETCH_ALBUM_BY_ID_REQUEST,
  FETCH_ALBUM_BY_ID_SUCCESS,
  FETCH_ALBUM_BY_ID_FAILURE,
} from "./actionTypes";

const fetchAlbumIDRequest = () => {
  return {
    type: FETCH_ALBUM_BY_ID_REQUEST,
  };
};

const fetchAlbumIDSuccess = (album) => {
  return {
    type: FETCH_ALBUM_BY_ID_SUCCESS,
    payload: album,
  };
};

const fetchAlbumIDFailure = (error) => {
  return {
    type: FETCH_ALBUM_BY_ID_FAILURE,
    payload: error,
  };
};

export const fetchAlbumID = (id) => {
  
  // console.log("in jehrhekjhan")
  return  (dispatch) => {
    dispatch(fetchAlbumIDRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchAlbumIDSuccess(data));
        // console.log(data)
      })
      .catch((error) => {
        const errorMSG = error.message;
        dispatch(fetchAlbumIDFailure(errorMSG));
      });
  };
};