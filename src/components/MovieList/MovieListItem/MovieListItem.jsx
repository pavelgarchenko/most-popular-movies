import React from "react";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Picture from "../../Picture/Picture";

import "./MovieListItem.scss";


const MovieListItem = (props) => {
  const star = props.isFavorite ? <FontAwesomeIcon icon={faStar} className="star" /> : null
  return (
    <div className="MovieListItem">
      <Link className="" to={"/movie/" + props.id}>
        <Picture className="poster" poster_path={props.poster_path}/>
      </Link>  
      <div className="movie-desc">
        {star}
      </div>
    </div>
  )
}

export default MovieListItem;
