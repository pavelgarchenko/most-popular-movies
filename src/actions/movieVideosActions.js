import axios from "axios";
import * as types from "../constants/types";
import { API_KEY, MOVIEDB_API_BASE } from "../constants/constants";


export const fetchMovieVideos = (id) => {
  const endpoint = `${MOVIEDB_API_BASE}/movie/${id}/videos?api_key=${API_KEY}`
  return (dispatch) => {
    dispatch(fetchMovieVideosStarted());
    axios.get(endpoint)
      .then((response) => {
        dispatch(fetchMovieVideosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchMovieVideosFailure(error.message));
      })
    }
};

export const fetchMovieVideosStarted = () => {
  return {
    type: types.FETCH_MOVIE_VIDEOS_STARTED
  }
};

export const fetchMovieVideosSuccess = (payload) => {
  return {
    type: types.FETCH_MOVIE_VIDEOS_SUCCESS,
    payload: payload
  }
};

export const fetchMovieVideosFailure = (error) => {
  return {
    type: types.FETCH_MOVIE_VIDEOS_ERROR,
    error: error
  }
};
