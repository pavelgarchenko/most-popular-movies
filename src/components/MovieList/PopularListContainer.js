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
    page: state.popularListData.page,
    total_pages: state.popularListData.total_pages,
    error: state.popularListData.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovieList: (pathname) => {
      dispatch(fetchPopularList(pathname));
    },
    onLoadMore: (pathname, page) => {
      dispatch(fetchPopularList(pathname, page));
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
