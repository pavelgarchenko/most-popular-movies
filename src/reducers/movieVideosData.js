import * as types from "../constants/types";

const initialState = {
  fetching: false,
  fetched: false,
  payload: null,
  error: null,
};

const movieVideosData = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_VIDEOS_STARTED:
      return {
        fetching: true,
        fetched: false, 
        error: null,
        payload: null
      };
    case types.FETCH_MOVIE_VIDEOS_ERROR:
      return {
        ...state,
        fetching: false, 
        error: action.error,
      };
    case types.FETCH_MOVIE_VIDEOS_SUCCESS:
      return {
        fetching: false, 
        fetched: true, 
        error: null,
        payload: action.payload,
      };
    default:
      return state;
  }
}

export default movieVideosData;
