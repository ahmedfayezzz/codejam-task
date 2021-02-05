import {
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: true,
  photos: [],
  error: "",
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.payload,
        error: "",
      };
    case FETCH_PHOTO_FAILURE:
      return {
        ...state,
        loading: false,
        photos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default photosReducer;
