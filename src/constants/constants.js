const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
const MOVIEDB_API_BASE = "https://api.themoviedb.org/3";
const POSTER_URI_BASE = "https://image.tmdb.org/t/p/w"
const IMG_SIZES = [154, 185, 342]
const PAGE_TITLES = {
  popular: "Popular Movies",
  topRated: "Top Rated Movies",
  movieDetail: "Movie Detail",
}


const FETCH_MOVIE_DETAIL_STARTED = "FETCH_MOVIE_DETAIL_STARTED";
const FETCH_MOVIE_DETAIL_ERROR = "FETCH_MOVIE_DETAIL_ERROR";
const FETCH_MOVIE_DETAIL_SUCCESS = "FETCH_MOVIE_DETAIL_SUCCESS";

const TOGGLE_MENU = "TOGGLE_MENU";

module.exports = {
  API_KEY,
  MOVIEDB_API_BASE,
  POSTER_URI_BASE,
  IMG_SIZES,
  PAGE_TITLES,

  FETCH_MOVIE_DETAIL_STARTED,
  FETCH_MOVIE_DETAIL_ERROR,
  FETCH_MOVIE_DETAIL_SUCCESS,
  
  TOGGLE_MENU,
}
