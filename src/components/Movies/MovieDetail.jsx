import React from "react";

import NavContainer from "../Nav/NavContainer";
import Spinner from '../Spinner/Spinner';
import Trailer from "./Trailer";
import Picture from "./Picture";

import "./MovieDetail.scss";


class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.getMoviesById = this.getMoviesById.bind(this);
  }

  componentWillMount() {
    if (!this.getMoviesById()) {
      this.props.onFetchMovieDetail(this.props.match.params.id);
    } 
  }
  
  getMoviesById() {
    return this.props.moviesById[this.props.match.params.id];
  }
  
  render() {
    const data = 
      this.getMoviesById() ? this.getMoviesById()
      : this.props.fetched ? this.props.movieDetail
      : null;

    const content = 
      this.props.fetching ? <Spinner />
      : this.props.error ? this.props.error
      : <h1>Nothin to display</h1>;

    if (data) {
      return (
        <div className="MovieDetail" data-test="MovieDetail">
          <NavContainer title={this.props.pageTitle} arrowBack={true} /> 
          <header className="header">
            <h1>{data.title}</h1>
          </header>
          <main>
            <div className="mainDescription">
              <div className="leftWrapper">
                <Picture poster_path={data.poster_path}/>
              </div>
              <div className="rightWrapper">
                <span className="releaseDate">{data.release_date.split('-')[0]}</span>
                <span className="movieLength">{data.runtime ? data.runtime + " min" : ''}</span>
                <span className="voteAverage">{data.vote_average}/10</span>
                <button 
                  className="favorite" 
                  onClick={() => this.props.onAddToFavorites(data.id)}
                >
                  Mark as favorite
                </button>
              </div>
            </div>
            <div className="overview">{data.overview}</div>
            <hr/>
            <h2 className="trailersHeader">Trailers:</h2>
            <Trailer />
            <hr/>
            <Trailer />
          </main>
        </div>
      )
    }
    else {
      return (
        <div className="MovieDetail" data-test="MovieDetail">
          <NavContainer title="Movie Detail" arrowBack={true} /> 
          {content}
        </div>
      )
    }
  }
}
    
export default MovieDetail;