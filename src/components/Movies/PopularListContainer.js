import { connect } from "react-redux";

import MovieList from "./MovieList";
import { fetchPopularList } from "../../actions/popularListActions";
import { storeMovieListPath } from "../../actions/movieListActions";
import { PAGE_TITLES } from "../../constants/constants"


const mapStateToProps = state => {
  return {
    pageTitle: PAGE_TITLES.popular,
    fetching: state.popularListData.fetching,
    fetched: state.popularListData.fetched,
    movies: state.popularListData.movies,
    error: state.popularListData.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovieList: (pathname) => {
      dispatch(fetchPopularList(pathname));
    },
    onStoreMovieListPath: (pathname) => {
      dispatch(storeMovieListPath(pathname));
    }
  }
}

const PopularListContainer = connect(mapStateToProps, mapDispatchToProps)(
  MovieList
);

export default PopularListContainer;
