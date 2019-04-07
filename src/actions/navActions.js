import { TOGGLE_MENU } from "../constants/constants";


export const toggleMenu = (hidden = true) => {
  return {
    type: TOGGLE_MENU,
    hidden
  }
};
