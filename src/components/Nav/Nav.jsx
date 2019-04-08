import React from "react";
import { Link } from "react-router-dom";

import { faArrowLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Nav.scss";

const Nav = (props) => {
  const hidden = props.menuHiddenState ? "hidden" : null
  const arrow = props.arrowBack
    ? <Link to={props.movieListPath}>
        <FontAwesomeIcon icon={faArrowLeft} className="arrow"/>
      </Link>
    : null

  return (
    <div className="nav">
      <div className="title">
        {arrow}
        <h1>
          {props.title}
        </h1>
      </div>
      <div className="dots">
        <button onClick={props.onToggleMenu}>
          <FontAwesomeIcon icon={faEllipsisV}/>
        </button>
      </div>
      <div className={"dropdownContent " + hidden}>
        <Link to="/movie/top_rated" onClick={props.onToggleMenu}>Top Rated</Link>
        <Link to="/movie/popular" onClick={props.onToggleMenu}>Popular</Link>
      </div>
    </div>
  )
}

export default Nav;
