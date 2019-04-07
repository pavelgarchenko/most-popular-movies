import axios from "axios";
import * as types from "../constants/types";
import { API_KEY, MOVIEDB_API_BASE } from "../constants/constants";


export const fetchMovieDetail = (id) => {
  const endpoint = `${MOVIEDB_API_BASE}/movie/${id}?api_key=${API_KEY}`
  return (dispatch) => {
    dispatch(fetchMovieDetailStarted());
    axios.get(endpoint)
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

export const fetchMovieDetailStarted = () => ({
  // return {
    type: types.FETCH_MOVIE_DETAIL_STARTED
  // }
});

export const fetchMovieDetailSuccess = (payload) => {
  return {
    type: types.FETCH_MOVIE_DETAIL_SUCCESS,
    payload: payload
  }
};

export const fetchMovieDetailFailure = (error) => {
  return {
    type: types.FETCH_MOVIE_DETAIL_ERROR,
    error: error
  }
};

export const addToFavorites = (id) => {
  return {
    type: types.ADD_TO_FAVORITES,
    id: id,
  }
};
