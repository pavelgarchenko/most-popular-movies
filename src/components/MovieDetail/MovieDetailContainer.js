import { connect } from "react-redux";

import MovieDetail from "./MovieDetail";
import { fetchMovieDetail, addToFavorites, removeFromFavorites } from "../../actions/movieDetailActions";
import { fetchMovieVideos } from "../../actions/movieVideosActions";
import { PAGE_TITLES } from "../../constants/constants"


const mapStateToProps = state => {
  return {
    pageTitle: PAGE_TITLES.movieDetail,
    movieDetailData: state.movieDetailData,
    movieVideosData: state.movieVideosData,
    moviesById: state.moviesById,
    videosById: state.videosById,
    fetched: state.movieDetailData.fetched,
    fetching: state.movieDetailData.fetching,
    error: state.movieDetailData.error,
    favoriteMovies: state.favoriteMovies,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovieDetail: (id) => {
      dispatch(fetchMovieDetail(id));
      dispatch(fetchMovieVideos(id));
    },
    onAddToFavorites: (id) => {
      dispatch(addToFavorites(id));
    },
    onRemoveFromFavorites: (id) => {
      dispatch(removeFromFavorites(id));
    }
  }
}

const MovieDetailContainer = connect(mapStateToProps, mapDispatchToProps)(
  MovieDetail
);

export default MovieDetailContainer;
