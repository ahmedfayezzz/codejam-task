import { combineReducers } from "redux";

import photosReducer from "./photo/photoReducer";
import albumsReducer from "./album/albumReducer";

const rootReducer = combineReducers({
  albums: albumsReducer,
  photos: photosReducer,
});

export default rootReducer;
