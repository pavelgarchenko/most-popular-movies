import * as actions from './navActions';
import * as types from '../constants/types';


describe('navActions', () => {
  describe('toggleMenu', () => {
    it('it toggles true', () => {
      const expectedAction = {
        type: types.TOGGLE_MENU,
        hidden: true
      }
      expect(actions.toggleMenu()).toEqual(expectedAction)
    })
  })
})