import movieDetailData from '../movieDetailData'
import * as types from "../../constants/types";

const initialState = {
  fetching: false,
  fetched: false,
  payload: null,
  error: null,
};

describe('movieDetailData reducer', () => {
  
  it('should return the initial state', () => {
    expect(movieDetailData(undefined, {})).toEqual(initialState);
  });
  
  it('should handle FETCH_MOVIE_DETAIL_STARTED', () => {
    const expected = { ...initialState, fetching: true };
    expect(
      movieDetailData(undefined, {
        type: types.FETCH_MOVIE_DETAIL_STARTED
      }
    )).toEqual(expected);
  });
  
  it('should handle FETCH_MOVIE_DETAIL_SUCCESS', () => {
    const payload = { id: 1, title: "Test Title" }
    const expected = { 
      fetching: false, 
      fetched: true,
      payload: payload,
      error: null
    };

    expect(
      movieDetailData(undefined, {
        type: types.FETCH_MOVIE_DETAIL_SUCCESS,
        payload: payload
      })
    ).toEqual(expected);
  });
  
  it('should handle FETCH_MOVIE_DETAIL_SUCCESS and replace existing data ', () => {
    const existing = { id: 1, title: "Test OLD" }
    const payload = { id: 2, title: "Test NEW" }
    const expected = { 
      fetching: false, 
      fetched: true,
      payload: payload,
      error: null
    };

    expect(
      movieDetailData(existing, {
        type: types.FETCH_MOVIE_DETAIL_SUCCESS,
        payload: payload
      })
    ).toEqual(expected);
  });
  
  
  it('should handle FETCH_MOVIE_DETAIL_ERROR', () => {
    const payload = { error: "Test error message" }
    const expected = { 
      ...initialState,
      error: payload.error
    };

    expect(
      movieDetailData(undefined, {
        type: types.FETCH_MOVIE_DETAIL_ERROR,
        error: payload.error
      })
    ).toEqual(expected);
  });
})