import { connect } from "react-redux";

import MovieList from "./MovieList";
import { fetchTopRatedList } from "../../actions/topRatedListActions";
import { storeMovieListPath } from "../../actions/movieListActions";
import { PAGE_TITLES } from "../../constants/constants"


const mapStateToProps = state => {
  return {
    pageTitle: PAGE_TITLES.topRated,
    fetching: state.topRatedListData.fetching,
    fetched: state.topRatedListData.fetched,
    movies: state.topRatedListData.movies,
    page: state.topRatedListData.page,
    total_pages: state.topRatedListData.total_pages,
    error: state.topRatedListData.error,
    favoriteMovies: state.favoriteMovies,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onFetchMovieList: (pathname) => {
      dispatch(fetchTopRatedList(pathname));
    },
    onLoadMore: (pathname, page) => {
      dispatch(fetchTopRatedList(pathname, page));
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
