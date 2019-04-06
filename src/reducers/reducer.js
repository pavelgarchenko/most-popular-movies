import { combineReducers } from "redux";
import { 
  FETCH_MOVIE_DETAIL_STARTED,
  FETCH_MOVIE_DETAIL_ERROR,
  FETCH_MOVIE_DETAIL_SUCCESS,
  
  ADD_TO_FAVORITES,
  TOGGLE_MENU,
} from "../constants/constants";

const initialDetailData = {
  fetching: false,
  fetched: false,
  payload: {},
  error: null,
};

const initialFavoriteMovies = [];

const movieDetailData = (state = initialDetailData, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL_STARTED:
      return {
        fetching: true,
        fetched: false, 
        error: null,
        payload: null
      };
    case FETCH_MOVIE_DETAIL_ERROR:
      return {
        ...state,
        fetching: false, 
        error: action.error,
      };
    case FETCH_MOVIE_DETAIL_SUCCESS:
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

const favoriteMovies = (state = initialFavoriteMovies, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...new Set(state).add(action.id)];
    default:
      return state;
  }
}

const menuIsHidden = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
}

const reducer = combineReducers({
  movieDetailData,
  favoriteMovies,
  menuIsHidden,
});

export default reducer;
