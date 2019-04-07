
import axios from "axios";
import * as types from "../constants/types";
import { API_KEY, MOVIEDB_API_BASE } from "../constants/constants";


export const fetchPopularList = (pathname) => {
  const endpoint = `${MOVIEDB_API_BASE}${pathname}?api_key=${API_KEY}`

  return (dispatch) => {
    dispatch(fetchPopularListStarted());
    axios.get(endpoint)
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
   type: types.FETCH_POPULAR_LIST_STARTED
 }
};

export const fetchPopularListSuccess = (payload) => {
  return {
    type: types.FETCH_POPULAR_LIST_SUCCESS,
    payload: payload
  }
};

export const fetchPopularListFailure = (error) => {
  return {
    type: types.FETCH_POPULAR_LIST_ERROR,
    error: error
  }
};
