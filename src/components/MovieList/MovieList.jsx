import React from "react";

import MovieListItem from "./MovieListItem";
import NavContainer from "../Nav";
import Spinner from "../Spinner";

import "./MovieList.scss";


class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.onStoreMovieListPath(this.props.match.url);
    if (!this.props.fetched) {
      this.props.onFetchMovieList(this.props.match.url);  
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll() {
    if (this.props.fetching) return 
    if (this.props.page === this.props.total_pages) return 

    const allItems = document.querySelectorAll('.MovieListItem'),
          lastItem = allItems[allItems.length - 1],
          lastItemOffset = lastItem.offsetTop + lastItem.clientHeight,
          windowTopOffset = window.pageYOffset + window.innerHeight,
          bottomOffset = 750;
    
    if (windowTopOffset >= lastItemOffset - bottomOffset) {
      const pathname = this.props.match.url,
            nextPage = this.props.page + 1;
    
      this.props.onLoadMore(pathname, nextPage)
    }
  }

  render() {
    const content = 
      this.props.fetched ? this.props.movies.map((data, i) => {
        const isFavorite = this.props.favoriteMovies.indexOf(data.id) > -1
        return <MovieListItem key={i} id={data.id} isFavorite={isFavorite} poster_path={data.poster_path}/>
      })
      : this.props.error ? <h1>this.props.error</h1>
      : null

    return (
      <div className="MovieList" data-test="MovieList">
        <NavContainer title={this.props.pageTitle} />
        <main className="content">
          {content}
        </main>
        {this.props.fetching ? <Spinner /> : null}
      </div>
    );
  }
}

export default MovieList;
