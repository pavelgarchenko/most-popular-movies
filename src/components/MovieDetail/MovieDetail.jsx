import React from "react";

import NavContainer from "../Nav/NavContainer";
import Spinner from "../Spinner/Spinner";
import Trailer from "../Trailer/Trailer";
import Picture from "../Picture/Picture";

import "./MovieDetail.scss";


class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.getDetail = this.getDetail.bind(this);
    this.getVideos = this.getVideos.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id
    if (!this.getDetail()) {
      this.props.onFetchMovieDetail(id);
    } 
    if (!this.getVideos()) {
      this.props.onFetchMovieDetail(id);
    } 
  }
  
  getDetail() {
    const id = this.props.match.params.id
    const movieById = this.props.moviesById[id]
    if (movieById) {
      return movieById;
    } 
    else if (this.props.movieDetailData.fetched && this.props.movieDetailData.payload.id === id) {
      return this.props.movieDetailData.payload;
    } 
    else {
      return null;
    };
  }

  getVideos() {
    const id = this.props.match.params.id
    const videosById = this.props.videosById[id]
    if (videosById) {
      return videosById;
    } 
    else if (this.props.movieVideosData.fetched && this.props.movieVideosData.payload.id === id) {
      return this.props.movieVideosData.payload.results;
    } 
    else {
      return null;
    };
  }
  
  render() {
    const data = this.getDetail()

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
                {
                  this.props.favoriteMovies.indexOf(data.id) === -1 ?
                    <button 
                      className="favorite favorite--add" 
                      onClick={() => this.props.onAddToFavorites(data.id)}
                    >
                      Mark as favorite
                    </button>
                    :
                    <button 
                      className="favorite favorite--remove" 
                      onClick={() => this.props.onRemoveFromFavorites(data.id)}
                    >
                      Remove from favorites
                    </button>
                }
              </div>
            </div>
            <div className="overview">{data.overview}</div>
            <hr/>
            <h2 className="trailersHeader">Trailer:</h2>
            {
              this.getVideos() ? this.getVideos().map((video, i) => {
                return <Trailer key={i} video_name={video.name} video_key={video.key} />
              }) : ''
            }
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