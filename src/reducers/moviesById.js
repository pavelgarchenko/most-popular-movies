import * as types from "../constants/types";


const initialState = {};

const moviesById = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_DETAIL_SUCCESS:
      var newState = {...state};
      newState[action.payload.id] = action.payload;
      return newState
    default:
      return state;
  }
}

export default moviesById;