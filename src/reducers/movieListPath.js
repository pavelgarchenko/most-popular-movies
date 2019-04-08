import * as types from "../constants/types";

const initialState = '/';

export const movieListPath = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_MOVIE_LIST_PATH:
      return action.pathname;
    default:
      return state;
  }
}
export default movieListPath;