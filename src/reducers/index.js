import { combineReducers } from "redux";
import wallpapersReducer from "./wallpapers";
import searchBarReducer from "./search-bar";

export default combineReducers({
  searchBar: searchBarReducer,
  wallpapers: wallpapersReducer
});
