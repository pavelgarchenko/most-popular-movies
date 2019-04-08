import React from "react";
import { Link } from "react-router-dom";

import Picture from "../../../Picture/Picture";

import "./MovieListItem.scss";


const MovieListItem = (props) => {
  return (
    <Link className="MovieListItem" to={"/movie/" + props.id}>
      <Picture className="poster" poster_path={props.poster_path}/>
    </Link>  
  )
}

export default MovieListItem;