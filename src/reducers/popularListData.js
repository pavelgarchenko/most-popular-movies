import * as types from "../constants/types";

const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  page: 1,
  total_pages: null,
  error: null,
};

const popularListData = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POPULAR_LIST_STARTED:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case types.FETCH_POPULAR_LIST_SUCCESS:
      return {
        fetching: false,
        fetched: true,
        movies: [...state.movies, ...action.payload.results],
        page: action.payload.page,
        total_pages: action.payload.total_pages,
        error: null
      };
    case types.FETCH_POPULAR_LIST_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default popularListData;