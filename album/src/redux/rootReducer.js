import { combineReducers } from "redux";

import photosReducer from "./photo/photoReducer";
import albumsReducer from "./album/albumReducer";
import usersReducer from './user/userReducer';
import albumIDReducer from './album/albumByIDReducer';

const rootReducer = combineReducers({
  albums: albumsReducer,
  photos: photosReducer,
  users:usersReducer,
  albumID:albumIDReducer
});

export default rootReducer;
