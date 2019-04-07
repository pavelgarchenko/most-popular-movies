import { connect } from "react-redux";

import MovieList from "./MovieList";
import { fetchTopRatedList } from "../../../actions/topRatedListActions";
import { storeMovieListPath } from "../../../actions/movieListActions";
import { PAGE_TITLES } from "../../../constants/constants"


const mapStateToProps = state => {
  return {
    pageTitle: PAGE_TITLES.topRated,
    fetching: state.topRatedListData.fetching,
    fetched: state.topRatedListData.fetched,
    movies: state.topRatedListData.movies,
    error: state.topRatedListData.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovieList: (pathname) => {
      dispatch(fetchTopRatedList(pathname));
    },
    onStoreMovieListPath: (pathname) => {
      dispatch(storeMovieListPath(pathname));
    }
  }
}

const TopRatedListContainer = connect(mapStateToProps, mapDispatchToProps)(
  MovieList
);

export default TopRatedListContainer;
