import React from "react";

import MovieListItem from "./MovieListItem/MovieListItem";
import NavContainer from "../Nav/NavContainer";
import Spinner from "../Spinner/Spinner";

import "./MovieList.scss";


class MovieList extends React.Component {
  
  componentWillMount() {
    this.props.onStoreMovieListPath(this.props.match.url);
    if (!this.props.fetched) {
      this.props.onFetchMovieList(this.props.match.url);  
    }
  }
  
  render() {
    const content = 
      this.props.fetched ? this.props.movies.map((data, i) => {
        return <MovieListItem key={i} id={data.id} poster_path={data.poster_path}/>
      })
      : this.props.fetching ? <Spinner />
      : this.props.error ? this.props.error
      : "Nothing is fetched"

    return (
      <div className="MovieList" data-test="MovieList">
        <NavContainer title={this.props.pageTitle} />
        <main className="content">
          {content}
        </main>
      </div>
    );
  }
}

export default MovieList;
