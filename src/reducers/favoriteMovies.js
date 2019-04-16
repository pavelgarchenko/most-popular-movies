import * as types from "../constants/types";

const initialState = [];

const favoriteMovies = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITES:
      return [...new Set(state).add(action.id)]
    case types.REMOVE_FROM_FAVORITES:
      const newState = [...state];
      const idx = newState.indexOf(action.id);
      newState.splice(idx, 1);
      return newState
    default:
      return state
  }
}

export default favoriteMovies;