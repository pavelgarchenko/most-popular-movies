import * as types from "../constants/types";

const initialState = [];

const favoriteMovies = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITES:
      return [...new Set(state).add(action.id)]
    default:
      return state
  }
}

export default favoriteMovies;