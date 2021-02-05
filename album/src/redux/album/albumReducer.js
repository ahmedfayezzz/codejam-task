import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: true,
  albums: [],
  error: "",
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.payload,
        error: "",
      };
    case FETCH_ALBUM_FAILURE:
      return {
        ...state,
        loading: false,
        albums: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default albumsReducer;
