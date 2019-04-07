import * as types from "../constants/types";

const initialFavoriteMovies = [];

export const favoriteMovies = (state = initialFavoriteMovies, action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITES:
      return [...new Set(state).add(action.id)];
    default:
      return state;
  }
}

export default favoriteMovies;