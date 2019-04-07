
import axios from "axios";
import { 
  API_KEY,
  MOVIEDB_API_BASE,
  FETCH_TOP_RATED_LIST_STARTED,
  FETCH_TOP_RATED_LIST_ERROR,
  FETCH_TOP_RATED_LIST_SUCCESS,
} from "../constants/constants.js";


export const fetchTopRatedList = (pathname, page = 1) => {
  const ENDPOINT = `${MOVIEDB_API_BASE}${pathname}?api_key=${API_KEY}&page=${page}`

  return (dispatch) => {
    dispatch(fetchTopRatedListStarted());
    axios.get(ENDPOINT)
      .then((response) => {
        setTimeout(() => {
          dispatch(fetchTopRatedListSuccess(response.data));
        }, 5000);
      })
      .catch((error) => {
        dispatch(fetchTopRatedListFailure(error.message));
      })
    }
};

export const fetchTopRatedListStarted = () => {
 return {
   type: FETCH_TOP_RATED_LIST_STARTED
 }
};

export const fetchTopRatedListSuccess = (payload) => {
  return {
    type: FETCH_TOP_RATED_LIST_SUCCESS,
    payload: payload
  }
};

export const fetchTopRatedListFailure = (error) => {
  return {
    type: FETCH_TOP_RATED_LIST_ERROR,
    error: error
  }
};
