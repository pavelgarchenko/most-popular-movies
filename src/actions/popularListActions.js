
import axios from "axios";
import * as types from "../constants/types";
import { API_KEY, MOVIEDB_API_BASE } from "../constants/constants";


export const fetchPopularList = (pathname, page = 1) => {
  const endpoint = `${MOVIEDB_API_BASE}${pathname}?api_key=${API_KEY}&page=${page}`

  return (dispatch) => {
    dispatch(fetchPopularListStarted());
    axios.get(endpoint)
      .then((response) => {
        dispatch(fetchPopularListSuccess(response.data));
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
