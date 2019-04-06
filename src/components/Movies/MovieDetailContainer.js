import { connect } from "react-redux";

import MovieDetail from "./MovieDetail";
import { fetchMovieDetail, addToFavorites } from "../../actions/movieDetailActions";
import { PAGE_TITLES } from "../../constants/constants"


const mapStateToProps = state => {
  return {
    pageTitle: PAGE_TITLES.movieDetail,
    movieDetail: state.movieDetailData.payload,
    moviesById: state.moviesById,
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
    },
    onAddToFavorites: (id) => {
      dispatch(addToFavorites(id));
    }
  }
}

const MovieDetailContainer = connect(mapStateToProps, mapDispatchToProps)(
  MovieDetail
);

export default MovieDetailContainer;
