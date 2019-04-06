import { combineReducers } from "redux";
import { 
  FETCH_MOVIE_DETAIL_STARTED,
  FETCH_MOVIE_DETAIL_ERROR,
  FETCH_MOVIE_DETAIL_SUCCESS,
  
  TOGGLE_MENU,
} from "../constants/constants";

const initialDetailData = {
  fetching: false,
  fetched: false,
  payload: {},
  error: null,
};

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
  menuIsHidden,
});

export default reducer;
