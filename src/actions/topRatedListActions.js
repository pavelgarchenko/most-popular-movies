
import axios from "axios";
import * as types from "../constants/types";
import { API_KEY, MOVIEDB_API_BASE } from "../constants/constants";


export const fetchTopRatedList = (pathname) => {
  const endpoint = `${MOVIEDB_API_BASE}${pathname}?api_key=${API_KEY}`

  return (dispatch) => {
    dispatch(fetchTopRatedListStarted());
    axios.get(endpoint)
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
   type: types.FETCH_TOP_RATED_LIST_STARTED
 }
};

export const fetchTopRatedListSuccess = (payload) => {
  return {
    type: types.FETCH_TOP_RATED_LIST_SUCCESS,
    payload: payload
  }
};

export const fetchTopRatedListFailure = (error) => {
  return {
    type: types.FETCH_TOP_RATED_LIST_ERROR,
    error: error
  }
};
