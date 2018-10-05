import { SEARCHBAR_FOCUS, SEARCHBAR_SUBMIT } from "../actions/types";
const initialSearchBarState = {
  focus: false
};

export default (state = initialSearchBarState, action) => {
  switch (action.type) {
    case SEARCHBAR_FOCUS:
      return { ...state, focus: action.payload };

    default:
      return state;
  }
};
