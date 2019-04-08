import moviesById from '../moviesById'
import * as types from "../../constants/types";

const initialState = {}

describe('moviesById reducer', () => {
  
  it('should return the initial state', () => {
    expect(moviesById(undefined, {})).toEqual(initialState);
  });
  
  describe('FETCH_MOVIE_DETAIL_SUCCESS', ()=> {

    it('should set id as the key and payload as value ', () => {
      const payload = { id: 1, title: "Test Title" }
      const expected = { 1: payload };
  
      expect(
        moviesById(undefined, {
          type: types.FETCH_MOVIE_DETAIL_SUCCESS,
          payload
        })
      ).toEqual(expected);
    });
    
    it('should add new data to the existing', () => {
      const existing = { 
        1: { 
          id: 1, 
          title: "Test Title 1" 
        }
      }
      const payload = { 
        id: 2, 
        title: "Test Title 2" 
      }
      const expected = { 
        ...existing, 
        2: payload
      };
  
      expect(
        moviesById(existing, {
          type: types.FETCH_MOVIE_DETAIL_SUCCESS,
          payload
        })
      ).toEqual(expected);
    });
  });
});