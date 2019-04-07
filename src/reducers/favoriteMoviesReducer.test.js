import favoriteMovies from './favoriteMoviesReducer'
import * as types from "../constants/types";


const initialState = [];

describe('favoriteMoviesReducer', () => {
  
  it('should return the initial state', () => {
    expect(favoriteMovies(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_FAVORITE_MOVIE', () => {
    const id = 1
    expect(
      favoriteMovies([], {
        type: types.ADD_TO_FAVORITES,
        id: id
      })).toEqual([1]);
  });

  it('should add id to an existing array', () => {
    const existingArray = [1, 4, 5]
    const id = 2
    expect(
      favoriteMovies(existingArray, {
        type: types.ADD_TO_FAVORITES,
        id: id
      })).toEqual([...existingArray, id]);
  });
  
  it('should store array of unique ids', () => {
    const existingArray = [1, 2, 3]
    const id = 2
    expect(
      favoriteMovies(existingArray, {
        type: types.ADD_TO_FAVORITES,
        id: id
      })).toEqual(existingArray);
  });
})