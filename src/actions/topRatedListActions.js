
import axios from "axios";
import * as types from "../constants/types";
import { API_KEY, MOVIEDB_API_BASE } from "../constants/constants";


export const fetchTopRatedList = (pathname, page = 1) => {
  const endpoint = `${MOVIEDB_API_BASE}${pathname}?api_key=${API_KEY}&page=${page}`

  return (dispatch) => {
    dispatch(fetchTopRatedListStarted());
    axios.get(endpoint)
      .then((response) => {
        dispatch(fetchTopRatedListSuccess(response.data));
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
