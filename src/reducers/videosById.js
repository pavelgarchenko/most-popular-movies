import * as types from "../constants/types";


const initialState = {};

const videosById = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_VIDEOS_SUCCESS:
      var newState = {...state};
      newState[action.payload.id] = action.payload.results;
      return newState
    default:
      return state;
  }
}

export default videosById;