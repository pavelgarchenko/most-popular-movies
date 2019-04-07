
import axios from "axios";
import { 
  API_KEY,
  MOVIEDB_API_BASE,
  FETCH_POPULAR_LIST_STARTED,
  FETCH_POPULAR_LIST_ERROR,
  FETCH_POPULAR_LIST_SUCCESS,
} from "../constants/constants.js";


export const fetchPopularList = (pathname, page = 1) => {
  const ENDPOINT = `${MOVIEDB_API_BASE}${pathname}?api_key=${API_KEY}&page=${page}`

  return (dispatch) => {
    dispatch(fetchPopularListStarted());
    axios.get(ENDPOINT)
      .then((response) => {
        setTimeout(() => {
          dispatch(fetchPopularListSuccess(response.data));
        }, 5000);
      })
      .catch((error) => {
        dispatch(fetchPopularListFailure(error.message));
      })
    }
};

export const fetchPopularListStarted = () => {
 return {
   type: FETCH_POPULAR_LIST_STARTED
 }
};

export const fetchPopularListSuccess = (payload) => {
  return {
    type: FETCH_POPULAR_LIST_SUCCESS,
    payload: payload
  }
};

export const fetchPopularListFailure = (error) => {
  return {
    type: FETCH_POPULAR_LIST_ERROR,
    error: error
  }
};
