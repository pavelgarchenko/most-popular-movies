import * as types from "../constants/types";

const initialState = true;

const menuHiddenState = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
}

export default menuHiddenState;
