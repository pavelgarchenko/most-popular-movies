import movieListPath from '../movieListPath'
import * as types from "../../constants/types";


const initialState = '/';

describe('movieListPath reducer', () => {
  
  it('should return the initial state', () => {
    expect(movieListPath(undefined, {})).toEqual(initialState);
  });
  
  it('should handle STORE_MOVIE_LIST_PATH', () => {
    const expected = '/movie/popular';
    expect(
      movieListPath(undefined, {
        type: types.STORE_MOVIE_LIST_PATH,
        pathname: expected
      }
    )).toEqual(expected);
  });
})