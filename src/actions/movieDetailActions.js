import axios from "axios";
import { 
  API_KEY,
  MOVIEDB_API_BASE,
  FETCH_MOVIE_DETAIL_STARTED,
  FETCH_MOVIE_DETAIL_ERROR,
  FETCH_MOVIE_DETAIL_SUCCESS,
  ADD_TO_FAVORITES,
} from "../constants/constants";


export const fetchMovieDetail = (id) => {
  const ENDPOINT = `${MOVIEDB_API_BASE}/movie/${id}?api_key=${API_KEY}`
  return (dispatch) => {
    dispatch(fetchMovieDetailStarted());
    axios.get(ENDPOINT)
      .then((response) => {
        setTimeout(() => {
          dispatch(fetchMovieDetailSuccess(response.data));
        }, 5000);
      })
      .catch((error) => {
        dispatch(fetchMovieDetailFailure(error.message));
      })
    }
};

export const fetchMovieDetailStarted = () => {
  return {
    type: FETCH_MOVIE_DETAIL_STARTED
  }
};

export const fetchMovieDetailSuccess = (payload) => {
  return {
    type: FETCH_MOVIE_DETAIL_SUCCESS,
    payload: payload
  }
};

export const fetchMovieDetailFailure = (error) => {
  return {
    type: FETCH_MOVIE_DETAIL_ERROR,
    error: error
  }
};

export const addToFavorites = (id) => {
  return {
    type: ADD_TO_FAVORITES,
    id: id,
  }
};
