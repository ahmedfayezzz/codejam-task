import { combineReducers } from "redux";

import photosReducer from "./photo/photoReducer";
import albumsReducer from "./album/albumReducer";
import usersReducer from "./user/userReducer";

const rootReducer = combineReducers({
  albums: albumsReducer,
  users: usersReducer,
  photos: photosReducer,
});

export default rootReducer;
