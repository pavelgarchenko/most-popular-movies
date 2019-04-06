import axios from "axios";
import { 
  API_KEY,
  MOVIEDB_API_BASE,
  FETCH_MOVIE_LIST_STARTED,
  FETCH_MOVIE_LIST_ERROR,
  FETCH_MOVIE_LIST_SUCCESS,
  STORE_MOVIE_LIST_PATH,
} from "../constants/constants.js";


export const fetchMovieList = (pathname) => {
  const ENDPOINT = `${MOVIEDB_API_BASE}${pathname}?api_key=${API_KEY}`

  return (dispatch) => {
    dispatch(fetchMovieListStarted());
    axios.get(ENDPOINT)
      .then((response) => {
        setTimeout(() => {
          dispatch(fetchMovieListSuccess(response.data));
        }, 5000);
      })
      .catch((error) => {
        dispatch(fetchMovieListFailure(error.message));
      })
    }
};

export const fetchMovieListStarted = () => {
 return {
   type: FETCH_MOVIE_LIST_STARTED,
 }
};

export const fetchMovieListSuccess = (payload) => {
  return {
    type: FETCH_MOVIE_LIST_SUCCESS,
    payload: payload
  }
};

export const fetchMovieListFailure = (error) => {
  return {
    type: FETCH_MOVIE_LIST_ERROR,
    error: error
  }
};

export const storeMovieListPath = (pathname) => {
  return {
    type: STORE_MOVIE_LIST_PATH,
    pathname: pathname
  }
};
