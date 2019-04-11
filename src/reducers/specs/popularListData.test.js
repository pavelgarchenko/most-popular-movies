import popularListData from '../popularListData'
import * as types from "../../constants/types";

const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  page: 1,
  total_pages: null,
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
  
  describe('FETCH_POPULAR_LIST_SUCCESS', () => {

    it('should update state', () => {
      const payload = { page: 1, results: [1, 2, 3], total_pages: 6 }
      const expected = { 
        fetching: false, 
        fetched: true,
        movies: payload.results,
        page: payload.page,
        total_pages: payload.total_pages,
        error: null
      };
      expect(
        popularListData(undefined, {
          type: types.FETCH_POPULAR_LIST_SUCCESS,
          payload: payload
        })
      ).toEqual(expected);
    });
      
    it('Should update page number and add results to existing list', () => {
      const existing = { 
        fetching: false, 
        fetched: true, 
        page: 1, 
        total_pages: 6, 
        movies: [1, 2, 3] 
      }
      const payload = { 
        page: 2, 
        total_pages: 6, 
        results: [4, 5, 6] 
      }
      const expected = { 
        fetching: false, 
        fetched: true,
        movies: [...existing.movies, ...payload.results],
        page: payload.page,
        total_pages: payload.total_pages,
        error: null
      };
      expect(
        popularListData(existing, {
          type: types.FETCH_POPULAR_LIST_SUCCESS,
          payload: payload
        })
      ).toEqual(expected);
    });
  })
        
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