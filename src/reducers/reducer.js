import { combineReducers } from "redux";
import { TOGGLE_MENU } from "../constants/constants";

const menuIsHidden = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
}

const reducer = combineReducers({
  menuIsHidden,
});

export default reducer;
