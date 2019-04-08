import { combineReducers } from "redux";

import popularListData from "./popularListData";
import topRatedListData from "./topRatedListData";
import movieDetailData from "./movieDetailData";
import movieVideosData from "./movieVideosData";
import moviesById from "./moviesById";
import videosById from "./videosById";
import favoriteMovies from "./favoriteMovies";
import menuHiddenState from "./menuHiddenState";
import movieListPath from "./movieListPath";

const reducer = combineReducers({
  popularListData,
  topRatedListData,
  movieDetailData,
  movieVideosData,
  moviesById,
  videosById,
  favoriteMovies,
  menuHiddenState,
  movieListPath,
});

export default reducer;
