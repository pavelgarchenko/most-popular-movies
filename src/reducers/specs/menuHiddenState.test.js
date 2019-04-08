import menuHiddenState from '../menuHiddenState'
import * as types from "../../constants/types";


const initialState = true;

describe('menuHiddenState reducer', () => {
  
  it('should return the initial state', () => {
    expect(menuHiddenState(undefined, {})).toEqual(initialState);
  });
  
  it('should handle TOGGLE_MENU', () => {
    const expected = false
    expect(
      menuHiddenState(undefined, {
        type: types.TOGGLE_MENU
      }
    )).toEqual(expected);
  });
  
  it('should set to true if was false', () => {
    const initial = false
    const expected = true
    expect(
      menuHiddenState(initial, {
        type: types.TOGGLE_MENU
      }
    )).toEqual(expected);
  });
})