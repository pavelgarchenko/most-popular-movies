import popularListData from '../popularListData'
import * as types from "../../constants/types";

const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  error: null,
};

describe('popularListData reducer', () => {
  
  it('should return the initial state', () => {
    expect(popularListData(undefined, {})).toEqual(initialState);
  });
  
  it('should handle FETCH_POPULAR_LIST_STARTED', () => {
    const expected = { ...initialState, fetching: true };
    expect(
      popularListData(undefined, {
        type: types.FETCH_POPULAR_LIST_STARTED
      }
    )).toEqual(expected);
  });
  
  it('should handle FETCH_POPULAR_LIST_SUCCESS', () => {
    const payload = { page: 1, results: [1, 2, 3] }
    const expected = { 
      fetching: false, 
      fetched: true,
      movies: payload.results,
      error: null
    };

    expect(
      popularListData(undefined, {
        type: types.FETCH_POPULAR_LIST_SUCCESS,
        payload: payload
      })
    ).toEqual(expected);
  });
  
  it('should handle FETCH_POPULAR_LIST_SUCCESS and replace existing data ', () => {
    const existing = { page: 1, results: [1, 2, 3] }
    const payload = { page: 2, results: [4, 5, 6] }
    const expected = { 
      fetching: false, 
      fetched: true,
      movies: payload.results,
      error: null
    };

    expect(
      popularListData(existing, {
        type: types.FETCH_POPULAR_LIST_SUCCESS,
        payload: payload
      })
    ).toEqual(expected);
  });
  
  
  it('should handle FETCH_POPULAR_LIST_ERROR', () => {
    const payload = { error: "Test error message" }
    const expected = { 
      ...initialState,
      error: payload.error
    };

    expect(
      popularListData(undefined, {
        type: types.FETCH_POPULAR_LIST_ERROR,
        error: payload.error
      })
    ).toEqual(expected);
  });
})