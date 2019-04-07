import * as actions from './navActions';
import * as types from '../constants/constants';

describe('navActions', () => {
  describe('toggleMenu', () => {
    it('it toggles true', () => {
      const hidden = true
      const expectedAction = {
        type: types.TOGGLE_MENU,
        hidden
      }
      expect(actions.toggleMenu(hidden)).toEqual(expectedAction)
    })
    it('it toggles false', () => {
      const hidden = false
      const expectedAction = {
        type: types.TOGGLE_MENU,
        hidden
      }
      expect(actions.toggleMenu(hidden)).toEqual(expectedAction)
    })
  })
})