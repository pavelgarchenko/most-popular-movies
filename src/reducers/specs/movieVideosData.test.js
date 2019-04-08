import movieVideosData from '../movieVideosData'
import * as types from "../../constants/types";

const initialState = {
  fetching: false,
  fetched: false,
  payload: null,
  error: null,
};

describe('movieVideosData reducer', () => {
  
  it('should return the initial state', () => {
    expect(movieVideosData(undefined, {})).toEqual(initialState);
  });
  
  it('should handle FETCH_MOVIE_VIDEOS_STARTED', () => {
    const expected = { ...initialState, fetching: true };
    expect(
      movieVideosData(undefined, {
        type: types.FETCH_MOVIE_VIDEOS_STARTED
      }
    )).toEqual(expected);
  });
  
  it('should handle FETCH_MOVIE_VIDEOS_SUCCESS', () => {
    const payload = { id: 1, title: "Test Title" }
    const expected = { 
      fetching: false, 
      fetched: true,
      payload: payload,
      error: null
    };

    expect(
      movieVideosData(undefined, {
        type: types.FETCH_MOVIE_VIDEOS_SUCCESS,
        payload: payload
      })
    ).toEqual(expected);
  });
  
  it('should handle FETCH_MOVIE_VIDEOS_SUCCESS and replace existing data ', () => {
    const existing = { id: 1, title: "Test OLD" }
    const payload = { id: 2, title: "Test NEW" }
    const expected = { 
      fetching: false, 
      fetched: true,
      payload: payload,
      error: null
    };

    expect(
      movieVideosData(existing, {
        type: types.FETCH_MOVIE_VIDEOS_SUCCESS,
        payload: payload
      })
    ).toEqual(expected);
  });
  
  
  it('should handle FETCH_MOVIE_VIDEOS_ERROR', () => {
    const payload = { error: "Test error message" }
    const expected = { 
      ...initialState,
      error: payload.error
    };

    expect(
      movieVideosData(undefined, {
        type: types.FETCH_MOVIE_VIDEOS_ERROR,
        error: payload.error
      })
    ).toEqual(expected);
  });
})