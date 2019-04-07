import axios from "axios";
import { 
  API_KEY,
  MOVIEDB_API_BASE,
  FETCH_MOVIE_VIDEOS_STARTED,
  FETCH_MOVIE_VIDEOS_ERROR,
  FETCH_MOVIE_VIDEOS_SUCCESS,
} from "../constants/constants";


export const fetchMovieVideos = (id) => {
  const ENDPOINT = `${MOVIEDB_API_BASE}/movie/${id}/videos?api_key=${API_KEY}`
  return (dispatch) => {
    dispatch(fetchMovieVideosStarted());
    axios.get(ENDPOINT)
      .then((response) => {
        setTimeout(() => {
          dispatch(fetchMovieVideosSuccess(response.data));
        }, 5000);
      })
      .catch((error) => {
        dispatch(fetchMovieVideosFailure(error.message));
      })
    }
};

export const fetchMovieVideosStarted = () => {
  return {
    type: FETCH_MOVIE_VIDEOS_STARTED
  }
};

export const fetchMovieVideosSuccess = (payload) => {
  return {
    type: FETCH_MOVIE_VIDEOS_SUCCESS,
    payload: payload
  }
};

export const fetchMovieVideosFailure = (error) => {
  return {
    type: FETCH_MOVIE_VIDEOS_ERROR,
    error: error
  }
};
