import React from "react";

import NavContainer from "../Nav/NavContainer";
import { MOVIE_LIST } from "../../constants/dummy_data";

import "./MovieDetail.scss";


const MovieDetail = (props) => {
  const data = MOVIE_LIST.results[0];

  return (
        <div className="MovieDetail" data-test="MovieDetail">
          <NavContainer title={this.props.pageTitle} arrowBack={true} /> 
          <header className="header">
            <h1>{data.title}</h1>
          </header>
          <main>
            <div className="mainDescription">
              <div className="leftWrapper">
                <img src={"https://image.tmdb.org/t/p/w185/" + data.poster_path} alt=""/>
              </div>
              <div className="rightWrapper">
                <span className="releaseDate">{data.release_date.split('-')[0]}</span>
                <span className="movieLength">120 min</span>
                <span className="voteAverage">{data.vote_average}/10</span>
                <button 
                  className="favorite"
                >
                  Mark as favorite
                </button>
              </div>
            </div>
            <div className="overview">{data.overview}</div>
            <hr/>
            <h2 className="trailersHeader">Trailers:</h2>
            Trailer 1
            <hr/>
            Trailer 2
          </main>
        </div>
      )
}
    
export default MovieDetail;