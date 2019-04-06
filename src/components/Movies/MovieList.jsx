import React from "react";

import NavContainer from "../Nav/NavContainer";
import MovieListItem from "./MovieListItem";
import { MOVIE_LIST } from "../../constants/dummy_data"

import "./MovieList.scss";

const MovieList = (props) => {

    const movies = []
    MOVIE_LIST.results.map((data, i) => {
      movies.push(<MovieListItem key={i} id={data.id} poster_path={data.poster_path}/>)
    });

    return (
      <div className="MovieList" data-test="MovieList">
        <NavContainer title="Movie Detail" />
        <main className="content">
          {movies}
        </main>
      </div>
    );
  }

export default MovieList;
