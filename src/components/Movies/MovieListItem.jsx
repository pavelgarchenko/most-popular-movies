import React from "react";
import { Link } from "react-router-dom";

import "./MovieListItem.scss";


const MovieListItem = (props) => {
  return (
    <Link className="MovieListItem" to={"/movie/" + props.id}>
      <picture className="poster">
      <img src={"https://image.tmdb.org/t/p/w185/" + props.poster_path} />
      </picture>
    </Link>  
  )
}

export default MovieListItem;