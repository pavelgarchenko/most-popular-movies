import * as types from "../constants/types";

const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  error: null,
};

const topRatedListData = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TOP_RATED_LIST_STARTED:
      return {
        fetching: true,
        fetched: false,
        movies: [],
        error: null
      };
    case types.FETCH_TOP_RATED_LIST_SUCCESS:
      return {
        fetching: false,
        fetched: true,
        movies: action.payload.results,
        error: null
      };
    case types.FETCH_TOP_RATED_LIST_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default topRatedListData;