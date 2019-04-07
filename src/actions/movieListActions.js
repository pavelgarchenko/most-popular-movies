import { STORE_MOVIE_LIST_PATH } from "../constants/types";


export const storeMovieListPath = (pathname) => {
  return {
    type: STORE_MOVIE_LIST_PATH,
    pathname: pathname
  }
};
