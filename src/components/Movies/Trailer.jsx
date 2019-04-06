import React from "react";
import { Link } from "react-router-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Trailer.scss";


const Trailer =() => {
  return (
    <div className="trailer">
      <Link to="#">
        <FontAwesomeIcon icon={faPlay} className="playArrow" />
      </Link>
      <span className="trailerTitle">Trailer 1</span>
    </div>
  )  
}

export default Trailer;