import videosById from '../videosById'
import * as types from "../../constants/types";

const initialState = {}

describe('videosById reducer', () => {
  
  it('should return the initial state', () => {
    expect(videosById(undefined, {})).toEqual(initialState);
  });
  
  describe('FETCH_VIDEOS_SUCCESS', ()=> {

    it('should set id as the key and payload.results as value ', () => {
      const payload = { 
        id: 1, 
        results: [
          {name: "Test Title"}
        ]
      }
      const expected = { 1: payload.results };
  
      expect(
        videosById(undefined, {
          type: types.FETCH_MOVIE_VIDEOS_SUCCESS,
          payload
        })
      ).toEqual(expected);
    });

    it('should add new data to the existing one', () => {
      const existing = { 
        1: [{name: "Test Title OLD"}]
      }
      const payload = { 
        id: 2, 
        results: [
          {name: "Test Title NEW"}
        ]
      }
      const expected = { 
        ...existing,
        2: payload.results 
      };
  
      expect(
        videosById(existing, {
          type: types.FETCH_MOVIE_VIDEOS_SUCCESS,
          payload
        })
      ).toEqual(expected);
    });
  });
});