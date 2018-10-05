import { FETCH_WALLPAPERS } from "../actions/types";
const initialWallpapersState = [];

export default (state = initialWallpapersState, action) => {
  switch (action.type) {
    case FETCH_WALLPAPERS:
      return [...action.payload.data.hits];
    default:
      return state;
  }
};
