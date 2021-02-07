import {
  FETCH_ALBUM_BY_ID_REQUEST,
  FETCH_ALBUM_BY_ID_SUCCESS,
  FETCH_ALBUM_BY_ID_FAILURE,
} from "./actionTypes"

const initialState = {
  loading: true,
  album: [],
  error: "",
};

const albumIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALBUM_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        album: action.payload,
        error: "",
      };
    case FETCH_ALBUM_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        album: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default albumIDReducer;
