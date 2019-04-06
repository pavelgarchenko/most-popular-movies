import { connect } from "react-redux";

import MovieDetail from "./MovieDetail";
import { fetchMovieDetail } from "../../actions/movieDetailActions";
import { PAGE_TITLES } from "../../constants/constants"


const mapStateToProps = state => {
  return {
    pageTitle: PAGE_TITLES.movieDetail,
    movieDetail: state.movieDetailData.payload,
    fetched: state.movieDetailData.fetched,
    fetching: state.movieDetailData.fetching,
    error: state.movieDetailData.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovieDetail: (id) => {
      dispatch(fetchMovieDetail(id));
    }
  }
}

const MovieDetailContainer = connect(mapStateToProps, mapDispatchToProps)(
  MovieDetail
);

export default MovieDetailContainer;
